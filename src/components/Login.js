import React ,{Component} from 'react';
import {View,ImageBackground,Image,Text,TouchableOpacity} from 'react-native';
import {CardItems,Input,Button,style} from './common';
import { connect } from 'react-redux';
import {Loginfun} from '../actions';
import backgroundImage from '../assets/bg.png';
import Logo from '../assets/elaraby_live_icon_big.png';

const MapState=state=>{
  return {
        sap: state.Authen.SapData.sapNum,
        password:state.Authen.SapData.password
    }

}

 class Login extends Component{
  
    state = {sap:'',password:''};
     
   OnSubmitButton()
 {
    
  // this.props.GetUserInput({this.props.sapNum,this.props.password});
const AthData={
    sap:this.state.sap,
    password:this.state.password
}
   Loginfun(AthData);
    
 }
    render(){
        return(
       <ImageBackground style={{width:'100%', height:'100%' }} source={backgroundImage}>
       <View style={style.Login_Logo}>
          <Image source={Logo} style={{width:195,height:25}}/>
         </View>
         <View style={style.Login_Text}>
             <Text style={style.text_TitleStyle}>تسجيل الدخول</Text>
         </View>
            <View style={style.InputeCont}>
            <View style={style.InputView}>
             <Input value={this.state.sap}
                 onChangeText={sap=>this.setState({sap})}
                 type="Sap"
                 >
              </Input>
           </View>
           <View style={style.InputView}>
           <Input value={MapState.password}
                 onChangeText={password=> this.setState({password})}
                 type="password"
                 >
           </Input>
           </View> 
          </View>
           <View style={style.ButtonCont}>
             <Button title={"تسجيل دخول"} onPress={this.OnSubmitButton.bind(this)} /> 
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
 


export default  connect(MapState,{Loginfun}) (Login)  