import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card,CardItems,style} from './common';
import timeIcon from '../assets/ion_android_time_ionicons.png';
import unlike from '../assets/like_icon.png';
import comments from '../assets/comments.png';

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
    
           <View style={style.SectionContainer}> 
              <View style={style.headerSection}>
                  <Text style={style.SectionTitle}>{props.title}</Text>
                  <Text style={style.ShowAll}>عرض الكل</Text>
              </View>
              <View>
               <FlatList horizontal   inverted
                 data={data.posts}
                 renderItem={({ item:rowData }) => {return(<Card key={data.posts.id}  >
                <CardItems key={rowData.id}>
                <View>
                 <Image  style={{width:272,height:139}}
                  source={{uri:rowData.image}} />
                </View>

                <View style={{paddingRight:10,paddingTop:10}} >
                  <Text >{rowData.title }</Text>
                </View>
                <View style={style.timeContainer}>
                 <Image source={timeIcon} style={{width:10,height:10}}></Image>
                 <Text style={style.timeText}>منذ ١ ساعة</Text>
               </View>
               <View style={style.LikesCommentsContainer}>
                 <View style={style.timeContainer}>
                   <Image source={unlike} style={{width:28,height:28}}></Image>
                   <Text style={style.LikeCoutText}>٣.٧ ألف</Text>
                 </View>
                 <View style={style.commentContainer}>
                   <Image source={comments} style={{width:28,height:28}}></Image>
                   <Text style={style.LikeCoutText}>٣.٧ ألف</Text>
                 </View>
               </View>
             </CardItems>
             </Card>);}}
                keyExtractor={(item, index) => index} />
               </View>
               
           </View>     
     
 );
 export {Section};
