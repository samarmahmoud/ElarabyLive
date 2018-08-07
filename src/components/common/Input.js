import React from 'react';
import {TextInput,View} from 'react-native';
import {style} from './style';

const Input =(props)=>{
 
  let keyboardType='default',secureInpute=false,placeholder='';
  
    switch(props.type){
        case "password":{
           secureInpute=true;
           placeholder="كلمة المرور";
            
        }
        break;
        case "Sap":{
          keyboardType='numeric';
          placeholder="SAP رقم" 
        }
        break;
        default :{
          keyboardType='default',
          secureInpute=false,
          placeholder='';
        }

    
    
  }
    return(
   
    <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#ffffff" 
            underlineColorAndroid='transparent'
            secureTextEntry={secureInpute}
            keyboardType={keyboardType}
            style={style.TextStyle} >
          </TextInput>
  
 );
};

export {Input};