import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card} from './Card';
import {CardItems} from './CardItems';
import {style} from './style';
import {LikeSection} from './LikesAndCommentCounters';
import timeIcon from '../../assets/ion_android_time_ionicons.png';


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
 const NewFeedSection =()=>(
             
              <View>
               
               <FlatList horizontal   inverted
                 data={data.posts}
                 renderItem={({ item:rowData }) => {return(<Card key={rowData.title}  >
                <CardItems key={rowData.title}>
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
               <LikeSection LikeCount={'٣.٧ ألف'} CommentsCount={'٣.٧'}/>
               </View>
             </CardItems>
             </Card>);}}
                keyExtractor={(item, index) => index.toString()} />
               </View> 
     
 );
 export {NewFeedSection};
