import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card,CardItems} from './common';

const data={posts:[{
    "userId": 1,
    "id": 1,
    "title": "مجموعة العربي تحصل على شهادة الجودة في مجال سلامة الغذاء",
    "image":"https://i.imgur.com/K3KJ3w4h.jpg",
    
  },

  {
    "userId": 1,
    "id": 2,
    "title": "مجموعة العربي تحصل على شهادة الجودة في مجال سلامة الغذاء",
    "image":"https://i.imgur.com/K3KJ3w4h.jpg",
    
  },
  {
    "userId": 1,
    "id": 3,
    "title": "مجموعة العربي تحصل على شهادة الجودة في مجال سلامة الغذاء",
    "image":"https://i.imgur.com/K3KJ3w4h.jpg",
    
  },
  {
    "userId": 1,
    "id": 4,
    "title": "مجموعة العربي تحصل على شهادة الجودة في مجال سلامة الغذاء",
    "image":"https://i.imgur.com/K3KJ3w4h.jpg",
    
  },
  {
    "userId": 1,
    "id": 5,
    "title": "مجموعة العربي تحصل على شهادة الجودة في مجال سلامة الغذاء",
    "image":"https://i.imgur.com/K3KJ3w4h.jpg",
    
  },
   ]}
 const Section =(props)=>(
    
           <View style={styles.SectionContainer}> 
              <View style={styles.headerSection}>
                  <Text style={styles.SectionTitle}>{props.title}</Text>
                  <Text style={styles.ShowAll}>عرض الكل</Text>
              </View>
              <View>
               <FlatList horizontal   inverted
                 data={data.posts}
                 renderItem={({ item:rowData }) => { return(data.posts.map(rowData=><Card key={rowData.id}  >
                <CardItems key={rowData.id}>
                <View>
                 <Image  style={{width:272,height:139}}
                  source={{uri:rowData.image}} />
                </View>

                <View >
                  <Text >{rowData.title }</Text>
                </View>
             </CardItems>
             </Card>));}}
                keyExtractor={(item, index) => index} />
               </View>
           </View>  
     
 );
 export {Section};

 const styles={
     Container:{
         flex:1,
     },
      SectionContainer:{
         
           backgroundColor:'#ffffff',

        },
        headerSection:{
            flexDirection:'row-reverse',
            justifyContent :'space-between',
            padding:5

        },
      SectionTitle:{
        color: '#000',
        fontSize:21,
        lineHeight:24,
        fontWeight:'900',
        padding:14,
       
      },
      ShowAll:{
        color: '#e73f17',
        fontSize:15,
        lineHeight:24,
        paddingLeft:20,
        fontWeight:'300',
        paddingTop:14
        
      },
      postText:{

      }

 };  