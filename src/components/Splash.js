import React from 'react';
import { View, Image, Text } from 'react-native';
import { style } from './common';
import Logo from '../assets/elaraby_live_icon_big.png';
import Spinner from '../assets/spinner_circle.png'

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={style.SplashParent}>

                <View style={style.Splashcontainer}>
                    <View style={style.Splash_imageContinar}>
    
                        <Image style={style.Splash_imageLogo}
                            source={Logo} />
                    </View>
                </View>
                <View >
                    <Image style={style.Splash_Spinner}
                        source={Spinner} />
                </View>
            </View>
        );
    }
}; 