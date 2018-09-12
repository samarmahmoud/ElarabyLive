import React from 'react';
import { View, Image, Text,ActivityIndicator ,Animated,Easing} from 'react-native';
import { style } from './common';
import {Actions} from 'react-native-router-flux';
import Logo from '../assets/elaraby_live_icon_big.png';
import Spinner from '../assets/spinner_circle.png'

export default class SplashScreen extends React.Component {
   constructor(props){
     super(props);
       let interval=5000;
       this.spinValue = new Animated.Value(0);
   }
    componentWillMount(){
        this.spin();
        setTimeout(this.onTimeChange.bind(this) ,7000);
    }
    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
          this.spinValue, 
          {
            toValue: 2,
            duration: 7000,
            easing: Easing.linear
          }
        ).start(() => this.spin())
      }
    onTimeChange()
    {
        //return (Actions.auth());
        return (Actions.NewFeed());
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        return (
            <View style={style.SplashParent}>
                <View style={style.Splashcontainer}>
                    <Image style={style.Splash_imageLogo}
                           source={Logo} />
                </View> 
                <View style={style.Splashcontainer} >   
                     <Animated.Image style={{width: 33,  height: 33 ,transform: [{rotate: spin}]}}
                       source={Spinner} >
                   </Animated.Image>
              </View>
            </View>
        );
    }
};     