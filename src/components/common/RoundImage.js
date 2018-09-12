import React from 'react';
import {View, Image} from 'react-native';
import backgroundImage from '../../assets/bg.png';

const RoundImage=()=>(
    <View style={style.RoundImageContainer}>
        <Image source={backgroundImage} style={style.RoundImageStyle}></Image>
    </View>

);

export {RoundImage};

const style={
    RoundImageStyle:{
       width:45,
       height:45,
       borderRadius:23,
    },
       RoundImageContainer:{
        alignItems:'center',
        flexDirection:'row-reverse',
    }
};