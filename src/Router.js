import React from 'react';
import {Image,Text} from 'react-native';
import {Router,Scene,Tabs} from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';
import profile from './assets/profile.png'; 
import profile_selected from './assets/profile_selected.png'; 
import tawasol from './assets/tawasol.png'; 
import tawasol_selectd from './assets/tawasol_selected.png'; 
import main from './assets/main.png'; 
import main_selected from './assets/main_selected.png'; 
import hq from './assets/hq.png'; 
import hq_selected from './assets/hq_selected.png'; 
import gallery from './assets/gallery.png'; 
import gallery_selected from './assets/gallery_selected.png'; 

const IconComponent=(props)=>{
   const img= props.select ? props.iconeName_selected : props.iconeName;
  
    return (<Image source={img} style={{width:props.width,height:props.height}} />);
   
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
              <Tabs tabBarPosition='bottom' showLabel={false}  swipeEnabled={false} >
               <Scene key='profile'  component={Home} icon={IconComponent} iconeName={profile} iconeName_selected={profile_selected} width={22} height={23} select={false}  hideNavBar />
               <Scene key='Twasol'  component={Login} icon={IconComponent} iconeName={tawasol} iconeName_selected={tawasol_selectd}  width={25} height={24} select={false}  hideNavBar/>
               <Scene key='Gallery' component={Home}  icon={IconComponent} iconeName={gallery} iconeName_selected={gallery_selected} width={25} height={25} select={false}  hideNavBar/>
               <Scene key='Hq'      component={Home}  icon={IconComponent} iconeName={hq}      iconeName_selected={hq_selected}      width={29} height={25} select={false}  hideNavBar/>
               <Scene key='main'    component={Home}  icon={IconComponent} iconeName={main}    iconeName_selected={main_selected}    width={22} height={24}  select={true}  hideNavBar/>  
             </Tabs>
            
             </Scene>
            </Scene>
        </Router>
    );

};

export default Router_Component;