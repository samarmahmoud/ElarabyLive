import React from 'react';
import {Text,View,Image} from 'react-native';
import {style} from './style';


const Header =(props)=>(
            <View style={style.headerStyle}>
                <Text style={style.headerTextStyle}>{props.headerTitle}</Text>
            </View>
        );
    

export {Header};



