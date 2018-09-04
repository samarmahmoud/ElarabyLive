import React from 'react';
import {View,Image,TouchableOpacity,Text,Platform,ScrollView} from 'react-native';
import axios from 'axios';
import {Header} from './common';
import logo from '../assets/elaraby_live_icon_big.png';
import {Section} from './Section';



export default class Home extends React.Component{
    state ={posts:[]}
    constructor(props) {
        super(props);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({posts:response.data}));
      }
      
    render(){
        return(
            <View style={{flex:1}}>
              <Header headerTitle={logo}/> 
            
              {/* <View style={styles.Container}> */}
              <ScrollView>
              <Section title={'اهم الاخبار'}/>
              <Section title={'مشاركات الاعضاء'}/>
              </ScrollView>
            {/* </View> */}
                    <View style={styles.Container} >
                    <TouchableOpacity style={styles.FloatingButtonStyle} >
                        <Text style={styles.textStyle}>+</Text>
                    </TouchableOpacity>
               </View> 
            </View>
           
        );
    }
}
const styles = {  
    Container:{
        flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    textStyle:{
        color: '#fff',
        fontSize: 25,
    },
    FloatingButtonStyle: {
    position: 'absolute',
    width: 56,height: 56,
    borderRadius: 30,
    backgroundColor:'#e73f17',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:10,
    right:10,
    ...Platform.select({
        ios:{
            shadowColor: '#000',
            shadowRadius: 30,
            shadowOffset: { width: 14, height: 14 },
            shadowOpacity: 0.3,
        },
        android:{
            elevation: 1,
            
        }
   
    }),
    
},
}; 