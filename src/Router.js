import React from 'react';
import {Router,Scene} from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';
const Router_Component=()=>{
    return(
        <Router>
            <Scene key="root" hideNavBar>
              <Scene key="spalsh">
                 <Scene key="Welcome" component={Splash}  hideNavBar initial/>
              </Scene>
             <Scene key="auth">
               <Scene key="Login" component={Login} hideNavBar/>
               
             </Scene>
             <Scene key="NewFeed">
             <Scene key="Home" component={Home} hideNavBar/>
             </Scene>
            </Scene>
        </Router>
    );

};

export default Router_Component;