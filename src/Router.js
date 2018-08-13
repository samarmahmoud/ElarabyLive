import React from 'react';
import {Image} from 'react-native';
import {Router,Scene,Tabs} from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';
import profileIcon from './assets/profile.png'; 
import main from './assets/main.png';
import gallery from './assets/gallery.png';
import HQ from './assets/hq.png';
import Twasol from './assets/tawasol.png';

const IconComponent()=>{
    return(
        <Image source={profileIcon} style={{width:22,height:23}}/>
    );
    
}

const Router_Component=()=>{
    // let iconSize={{width:22, height:23}};
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
             <Tabs tabBarPosition='bottom' showLabel={false} showIcon={true} activeBackgroundColor="#25abf9">
             <Scene key='Profile'  component={Home}  Icon={{IconComponent}}   hideNavBar  />
             <Scene key='Twasol'  component={Login}  Icon={Twasol} hideNavBar/>
             <Scene key='Gallery'  component={Home}  Icon={gallery} hideNavBar/>
             </Tabs>
             {/* <Scene key="Home" component={Home} hideNavBar  type='rest'/> */}
             </Scene>
            </Scene>
        </Router>
    );

};

export default Router_Component;