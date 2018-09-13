import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card} from './Card';
import {CardItems} from './CardItems';
import {style} from './style';
import {LikeSection} from './LikesAndCommentCounters';
import timeIcon from '../../assets/ion_android_time_ionicons.png';
import {RoundImage} from './RoundImage';

const data={posts:[{
    "userId": 1,
    "id": 1,
    "title": "قرية الأحلام بالساحل الشمالي تستقبل الفوج الأول من مصيف الموظفين …",
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
 const MemberSharedSection =()=>(
             
              <View>
               
               <FlatList horizontal   inverted
                 data={data.posts}
                 renderItem={({ item:rowData }) => {return(<Card key={data.posts.id}  >
                <CardItems key={rowData.id}>
                <View style={{flexDirection:'row-reverse',paddingTop:5,paddingStart:10}}>
                  <RoundImage/>
                  <View style={{flexDirection:'column-reverse'}}>
                 
                   <View style={style.timeContainer}>
                     <Image source={timeIcon} style={{width:10,height:10}}></Image>
                    <Text style={style.timeText}>منذ ١ ساعة</Text>
                   </View>
                   <View style={{paddingRight:10}} >
                    <Text >هشام مهدى</Text>
                   </View>
                 </View>
                </View>
                <View style={{marginRight:60}} >
                <View style={{paddingTop:5}} >
                  <Text >{rowData.title }</Text>
                </View>
                
               <LikeSection LikeCount={'٣.٧'} CommentsCount={'٣.٧'}/>
                </View>
             </CardItems>
             </Card>);}}
                keyExtractor={(item, index) => index.toString()} />
               </View> 
     
 );
 export {MemberSharedSection};
