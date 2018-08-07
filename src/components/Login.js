import React ,{Component} from 'react';
import {View,ImageBackground,Image,Text} from 'react-native';
import {Card,CardItems,Input,Button,style} from './common';
import backgroundImage from '../assets/bg.png';
import Logo from '../assets/elaraby_live_icon_big.png';
 class Login extends Component{
   state={
        password:'',
        email:''
    };
    
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
             <Input value={this.state.email}
                 onChangeText={email=>(this.setState(email))}
                 type="Sap"
                 >
              </Input>
           </View>
           <View style={style.InputView}>
           <Input value={this.state.password}
                 onChangeText={password=>(this.setState(password))}
                 type="password"
                 >
           </Input>
           </View>
           </View>
           <View style={style.ButtonCont}>
             <Button title={"تسجيل دخول"} onPress={()=>{}} /> 
            </View>
    
        <View style={style.ForgetPasswordCont}>
            <Text style={style.ForgetPasswordText}>نسيت كلمة المرور؟</Text>
         </View>
       </ImageBackground>
        ); 
    }
};
 


export default Login; 