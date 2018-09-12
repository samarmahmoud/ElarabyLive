import React from 'react';
import {View,Text,Image} from 'react-native';
import {style} from './style';
import arrowIcon from '../../assets/ion_android_arrow.png';

const SectionHeader =(props)=>(
    <View style={style.headerSection}>
        <Text style={style.SectionTitle}>{props.title}</Text>
        <View style={{alignItems:'center',flexDirection:'row-reverse'}}>
          <Text style={style.ShowAll}>{props.ShowAllTitle}</Text>
          <Image source={arrowIcon} style={{width:4,height:8}}></Image>
        </View>
    </View>

);
 
export {SectionHeader};