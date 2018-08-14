import React from 'react';
import {Image,Text} from 'react-native';
import {Router,Scene,Tabs} from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';
import profileIcon from './assets/profile.png'; 
import main from './assets/main.png';
import gallery from './assets/gallery.png';
import HQ from './assets/hq.png';
import Twasol from './assets/tawasol.png';

const IconComponent=(props)=>{

   switch(props.name){
       case "profile":
       return (<Image source={profileIcon} style={{width:22, height:23}}/>)
       break;
       case "main":
       return (<Image source={main} style={{width:22, height:23}}/>)
       break;
       case "twasol":
       return (<Image source={Twasol} style={{width:22, height:23}}/>)
       break;
       case "_gallery":
       return (<Image source={gallery} style={{width:22, height:23}}/>)
       break;
       case "_HQ":
       return (<Image source={HQ} style={{width:22, height:23}}/>)
       break;
       default :
       return (<Text>Error</Text>) ;
   }
    
};

const Router_Component=()=>{
    return(
        <Router>
            <Scene key="root" hideNavBar>
              <Scene key="spalsh">
                 <Scene key="Welcome" component={Splash}  hideNavBar initial  />
              </Scene>
             <Scene key="auth">
               <Scene key="Login" component={Login} hideNavBar  type='rest' />
                
             </Scene>    
             <Scene key="NewFeed">
              <Tabs tabBarPosition='bottom' showLabel={false} showIcon={true} activeBackgroundColor="#155da3">
               <Scene key='Profile'  component={Home} icon={IconComponent} name="profile"  hideNavBar />

               <Scene key='Twasol'  component={Login} icon={IconComponent} name="twasol"  hideNavBar/>
               <Scene key='Gallery' component={Home}  icon={IconComponent} name="_gallery"  hideNavBar/>
               <Scene key='Hq'      component={Home}  icon={IconComponent} name="_HQ"  hideNavBar/>
               <Scene key='main'    component={Home}  icon={IconComponent} name="main"  hideNavBar/>
             </Tabs>
             {/* <Scene key="Home" component={Home} hideNavBar  type='rest'/> */}
             </Scene>
            </Scene>
        </Router>
    );

};

export default Router_Component;