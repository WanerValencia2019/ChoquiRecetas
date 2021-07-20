import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import recipeImage from '../../../assets/recipe.png';

import Text from '../TextBasic';

const { width, height } = Dimensions.get('screen');

export default function CardRecipe({ uuid, title, time, image_url, containerStyle }) {
    const [liked, setLiked] = useState(false);
    const convert_time_to_readable = (t) => {
        const time_converted = {
            short: '< 20m',
            medium: ' 20m - 1h',
            long: '> 1h',
        };
        return time_converted[t];
    };
    return (
        <TouchableOpacity>
            <View style={[styles.container, { ...containerStyle }]}>
                <View style={{ display: 'flex' }}>
                    <Icon
                        name={liked ? 'heart' : 'heart-outline'}
                        type="material-community"
                        color={liked ? '#f50' : '#fff'}
                        onPress={() => setLiked(!liked)}
                        containerStyle={{
                            position: 'absolute',
                            right: 9,
                            top: 4,
                            zIndex: 2,
                            display: 'flex',
                            alignSelf: 'flex-end',
                            padding: 6,
                            backgroundColor: 'rgba(200,200,200,.7)',
                            borderRadius: 10,
                        }}
                    />
                    <Image
                        source={image_url ? { uri: image_url } : recipeImage}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Text textStyle={styles.text} numberOfLines={1} text={title} />
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginRight: 15,
                        }}
                    >
                        <Text type="SecondaryText" textStyle={styles.textType} text="Food " />
                        <View
                            style={{
                                width: 5,
                                height: 5,
                                backgroundColor: '#9FA5C0',
                                borderRadius: 20,
                            }}
                        />
                        <Text
                            type="SecondaryText"
                            textStyle={styles.textType}
                            text={convert_time_to_readable(time)}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.46,
        height: height * 0.26,
        backgroundColor: 'white',
        borderRadius: 15,        
        borderColor: 'gray',
        // borderWidth: 0.5,
        position: 'relative',
        // backgroundColor: 'whitesmoke',
        marginBottom: height * 0.0099,        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
        color: '#3E5481',
        marginLeft: 5,
    },
    image: {
        width: width * 0.46,
        height: height * 0.198,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    textType: {
        marginLeft: 5,
        fontSize: width * 0.044,
    },
});

CardRecipe.propTypes = {
    title: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    time: PropTypes.oneOf(['short', 'medium', 'long']),
    category: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
};

CardRecipe.defaultProps = {
    time: 'short',
    category: 'Food',
};
