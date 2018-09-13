import React from 'react';
import {Text,View,Image} from 'react-native';
import {ImageButton} from './imageButton';
import notifcation from '../../assets/notifications.png';
import search from '../../assets/magnifier.png';
import {style} from './style';


const Header =(props)=>(
            <View style={style.headerStyle}>
                <Image source={props.headerTitle} style={style.headerImage} />
                <View style={{flexDirection:'row',width:'50%'}}  >
                  <ImageButton source={notifcation} style={{width:19,height:19,marginLeft:16}}></ImageButton>
                  <ImageButton source={search} style={{width:18,height:18,marginLeft:30}}></ImageButton>
                </View>
            </View>
           
        );
    

export {Header};



