import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import eats from '../../../assets/eats.png';
import AlertMessage from '../../components/AlertMessage';
import CardRecipe from '../../components/CardRecipe';
import Loading from '../../components/Loading';
import { showAlert, hideAlert } from '../../components/AlertMessage/actionCreators.js';

import { logout, get_profile, update_image_profile } from './actionCreators.js';

import styles from './styles';

export default function Profile(props) {
    const { navigation } = props;
    const profile = useSelector((state) => state.profile);
    const [selectView, setSelectView] = useState(0);
    const dispatch = useDispatch();    
    const loading = useSelector((state) => state.loading);
    const alertMessage = useSelector((state) => state.alert);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
        dispatch(get_profile(profile.token));
        return () => dispatch(hideAlert);
    }, [profile.image_profile]);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        const { cancelled, base64 } = result;
        dispatch(update_image_profile(profile.token, base64));
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view_one}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Icon
                        //raised
                        name="cog"
                        type="material-community"
                        color="#2E3E5C"
                        onPress={() => console.log('hello')}
                        containerStyle={{margin:20,}}
                        size={24}
                    />
                    <Icon
                        //raised
                        name="logout"
                        type="material-community"
                        color="#FF6464"
                        onPress={() => dispatch(logout(profile.token, profile.user_id))}
                        containerStyle={{margin:20,}}
                        size={24}
                    />
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        rounded
                        title={`${profile.first_name[0]}${profile.last_name[0]}`}
                        source={profile.image_profile ? { uri: profile.image_profile } : null}
                        size="xlarge"
                        titleStyle={{ color: '#2E3E5C' }}
                        // containerStyle={{ borderColor: '#9FA5C0', borderWidth: 0.2 }}
                    >
                        <Avatar.Accessory size={35} onPress={() => pickImage()} />
                    </Avatar>
                    <Text
                        text={`${profile.first_name}  ${profile.last_name}`}
                        textStyle={{ color: '#3E5481', fontWeight: 'bold', marginTop: 10 }}
                        size={17}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 24 }}>
                        <View>
                            <Text
                                text={`${profile.recipes.length}`}
                                textStyle={{ color: '#3E5481', fontWeight: 'bold' }}
                                size={17}
                            />
                            <Text text="Recipes" type="SecondaryText" size={17} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text
                                text={`${profile.followings.length}`}
                                textStyle={{ color: '#3E5481', fontWeight: 'bold' }}
                                size={17}
                            />
                            <Text
                                textStyle={{ textTransform: 'capitalize' }}
                                text="Followings"
                                type="SecondaryText"
                                size={17}
                            />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text
                                text={`${profile.followers.length}`}
                                textStyle={{ color: '#3E5481', fontWeight: 'bold' }}
                                size={17}
                            />
                            <Text text="Followers" type="SecondaryText" size={17} />
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                    {alertMessage.showAlert || profile.error ? (
                        <AlertMessage message={alertMessage.message || profile.message} />
                    ) : null}
                    {loading.isLoading ? <Loading /> : null}
                </View>
            </View>

            <View style={styles.view_two}>
                <View
                    style={{
                        height: '15%',
                        width: '100%',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => setSelectView(0)}
                        style={{
                            borderBottomWidth: 3,
                            borderBottomColor: selectView === 0 ? '#1FCC79' : '#D0DBEA',
                            width: '49.9%',
                            padding: 15,
                        }}
                    >
                        <Text
                            text="My recipes"
                            textStyle={{
                                color: selectView === 0 ? '#3E5481' : '#9FA5C0',
                                fontWeight: '600',
                            }}
                            size={17}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelectView(1)}
                        style={{
                            borderBottomWidth: 3,
                            borderBottomColor: selectView === 1 ? '#1FCC79' : '#D0DBEA',
                            width: '49.9%',
                            padding: 15,
                        }}
                    >
                        <Text
                            text="Favorites"
                            type="SecondaryText"
                            size={17}
                            textStyle={{
                                color: selectView === 1 ? '#3E5481' : '#9FA5C0',
                                fontWeight: '600',
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginTop: 5,
                        padding: 5,
                    }}
                >
                    {selectView === 0 ? (
                        <>
                            <View
                                style={{
                                    display: 'flex',
                                    flex:1,
                                    flexDirection: 'row',
                                    flexWrap:'wrap',
                                    alignItems: 'flex-start',
                                }}
                            >
                                {profile.recipes.map((value, i) => {
                                    return (
                                        <CardRecipe
                                            key={value.uuid}
                                            uuid={value.uuid}
                                            image_url={value.image}
                                            likes={value.likes}
                                            title={value.title}
                                            category="Food"
                                            time={value.preparation_time}
                                            containerStyle={{marginLeft: (i+1)%2==0 ? 12:0 }}
                                        />
                                    );
                                })}
                            </View>

                        </>
                    ) : (
                        <>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <CardRecipe />
                                <CardRecipe />
                                <CardRecipe />
                                <CardRecipe />
                                <CardRecipe />
                                <CardRecipe />
                            </View>
                        </>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

Profile.propTypes = {};
Profile.defaultProps = {};
