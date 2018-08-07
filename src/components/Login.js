import React ,{Component} from 'react';
import {View,ImageBackground,Image,Text,TouchableOpacity} from 'react-native';
import {CardItems,Input,Button,style} from './common';
import { connect } from 'react-redux';
import {GetUserInput,Loginfun} from '../actions';
import backgroundImage from '../assets/bg.png';
import Logo from '../assets/elaraby_live_icon_big.png';

export const MapState=state=>{
   
   return{ sapDataObj:{
        sap: this.state.Authen.SapData.sapNum,
        password:this.state.Authen.SapData.password
    }};
   
}
OnSubmitButton()
{
   const userInput_SapData =this.GetUserInput(this.MapState.sapDataObj)
     this.props.LoginFun(userInput_SapData);
    
}
 class Login extends Component{
  
    
    render(){
        return(
       <ImageBackground style={{width:'100%', height:'100%' }} source={backgroundImage}>
       <View style={style.Login_Logo}>
          <Image source={Logo} style={{width:195,height:25}}/>
         </View>
         <View style={style.Login_Text}>
             <Text style={style.headerTextStyle}>تسجيل الدخول</Text>
         </View>
            <View style={style.InputeCont}>
            <View style={style.InputView}>
             <Input value={MapState.sapDataObj.sap}
                 onChangeText={MapState.sapDataObj.sap=>this.setState({MapState.sapDataObj.sap})}
                 type="Sap"
                 >
              </Input>
           </View>
           <View style={style.InputView}>
           <Input value={MapState.sapDataObj.password}
                 onChangeText={MapState.sapDataObj.sap=>this.setState({MapState.sapDataObj.password})}
                 type="password"
                 >
           </Input>
           </View>
           </View>
           <View style={style.ButtonCont}>
             <Button title={"تسجيل دخول"} onPress={()=>{this.OnSubmitButton.bind(this)}} /> 
            </View>
    
        <View style={style.ForgetPasswordCont}>
        <TouchableOpacity>
            <Text style={style.ForgetPasswordText}>نسيت كلمة المرور؟</Text>
            </TouchableOpacity>
         </View>
       </ImageBackground>
        ); 
    }
};
 


export default  connect(MapState,{GetUserInput,Loginfun}) (Loginform)  