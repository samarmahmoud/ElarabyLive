import React from 'react';
import {Image,TouchableOpacity} from 'react-native';


const ImageButton =(props)=>{
   
    return(
        <TouchableOpacity  onPress={props.onPress}>
        <Image  source={props.source} style={props.style}></Image>
        </TouchableOpacity>
    );
}

export {ImageButton};