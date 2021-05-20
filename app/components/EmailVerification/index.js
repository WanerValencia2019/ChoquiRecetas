import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import { SocialIcon } from "react-native-elements";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

import Button from "./../ButtonBasic";
import TextBasic from "./../TextBasic";
import Input from "./../InputBasic";

import styles from "./styles";

const CELL_COUNT = 4;

export default function EmailVerification() {
    const [email, setEmail] = useState("");
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

    return (
        <View style={styles.container}>
            <View>
                <TextBasic text="Check your email" textStyle={{ fontWeight: "bold" }} size={25} />
                <TextBasic
                    text="We have sent the code to your email"
                    size={16}
                    type="SecondaryText"
                />
            </View>
            <View style={{ display: "flex", width: "90%", marginTop: 30, marginBottom: 30 }}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}
                        >
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
            </View>
            <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom:10}}>
                    <TextBasic text="code expires in " />
                    <TextBasic text="03:12" type="Secondary" />
                </View>
                <Button text="Verify" height={50} containerStyle={{ width: "80%" }} />
                <Button
                    text="Send again"
                    type="Light"
                    height={50}
                    containerStyle={{ width: "80%", marginTop: 20 }}
                />
            </View>
        </View>
    );
}

EmailVerification.propTypes = {};
EmailVerification.defaultProps = {};
