import React from 'react';
import {View} from 'react-native';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';



export default class App extends React.Component {
 
  render() {
    return (   
       <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <Router/>
     </Provider>
   
    ); 
  }
}

  