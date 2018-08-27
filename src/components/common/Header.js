import React from 'react';
import {Text,View,Image} from 'react-native';
import {style} from './style';


const Header =(props)=>(
            <View style={style.headerStyle}>
                <Image source={props.headerTitle} style={style.headerImage} />
            </View>
        );
    

export {Header};



