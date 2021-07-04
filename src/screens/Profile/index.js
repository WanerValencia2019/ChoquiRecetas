import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';
import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import eats from '../../../assets/eats.png';

import { logout } from './actionCreators.js';

import styles from './styles';

export default function Profile(props) {
    const { navigation } = props;
    const profile = useSelector((state) => state.profile);
    console.log(profile);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View style={styles.view_one}>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>                
                    <Icon
                        raised
                        name="cog"
                        type="material-community"
                        color="#2E3E5C"
                        onPress={() => console.log('hello')}
                        //containerStyle={{margin:10, padding:10}}
                        size={24}
                    />
                    <Icon
                        raised
                        name="logout"
                        type="material-community"
                        color="#FF6464"
                        onPress={() => console.log('saliendo')}
                        //containerStyle={{margin:10, padding:10}}
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
                        //containerStyle={{ borderColor: '#9FA5C0', borderWidth: 0.2 }}
                    >
                    <Avatar.Accessory size={35} onPress={()=>console.log("Editando")} />
                    </Avatar>                    
                    <Text
                        text={`${profile.first_name}  ${profile.last_name}`}
                        textStyle={{ color: '#3E5481', fontWeight: 'bold', marginTop: 10 }}
                        size={17}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 24 }}>
                        <View>
                            <Text
                                text="50"
                                textStyle={{ color: '#3E5481', fontWeight: 'bold' }}
                                size={17}
                            />
                            <Text text="Recipes" type="SecondaryText" size={17} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text
                                text="120"
                                textStyle={{ color: '#3E5481', fontWeight: 'bold' }}
                                size={17}
                            />
                            <Text text="Following" type="SecondaryText" size={17} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text
                                text="120"
                                textStyle={{ color: '#3E5481', fontWeight: 'bold' }}
                                size={17}
                            />
                            <Text text="Followers" type="SecondaryText" size={17} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.view_two}>
                <Text text="BIENVENIDO" textStyle={{ fontWeight: 'bold' }} size={25} />
                <Text text={`${profile.first_name} ${profile.last_name}`} type="SecondaryText" />
                <Button
                    press={() => dispatch(logout(profile.token, profile.user_id))}
                    text="Cerrar sesión"
                    height={20}
                    containerStyle={{ width: '80%' }}
                />
            </View>
        </View>
    );
}

Profile.propTypes = {};
Profile.defaultProps = {};
