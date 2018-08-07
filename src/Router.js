import React from 'react';
import {Router,Scene} from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';

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
            </Scene>
        </Router>
    );

};

export default Router_Component;