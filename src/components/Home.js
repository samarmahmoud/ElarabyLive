import React from 'react';
import {View,Image,TouchableOpacity,Text,Platform,FlatList} from 'react-native';
import axios from 'axios';
import {Header,Card,CardItems} from './common';
import logo from '../assets/elaraby_live_icon_big.png';
import addPostImg from '../assets/add_post.png';



export default class Home extends React.Component{
    state ={posts:[]}
    constructor(props) {
        super(props);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({posts:response.data}));
      }
      renderList()
      {
          return(this.state.posts.map(post=><Card key={post.title}>
              <CardItems>
                <View style={styles.Container}>
                  <Image  style={{width:272,height:139}}
                   source={{uri:post.thumbnail_image}} />
                </View>
                <View>
                  <Text >{ post.title }</Text>
                </View>
              </CardItems>
          </Card>));
      }
    render(){
        return(
            <View style={{flex:1}}>
              <Header headerTitle={logo}/> 
            
              <View style={styles.Container}>
               <FlatList horizontal
                  renderItem={({ item: rowData }) => {this.renderList()}}
                  keyExtractor={(item, index) => index}
               />
                 <Image  style={{width:272,height:139}}
                   source={{uri:this.state.posts.thumbnail_image}} />
            </View>
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