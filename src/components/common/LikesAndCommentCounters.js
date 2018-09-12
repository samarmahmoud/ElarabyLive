import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {style} from './style';
import unlike from '../../assets/like_icon.png';
import comments from '../../assets/comments.png';

let styles={
  likeIcon:{
    width:28,
    height:28,
  },
};
onpressLike=()=>{
   colorChange={
    width:28,
    height:28,
   tintColor:'#155da3'
}
   styles.likeIcon=colorChange;
};

const LikeSection=(props)=>(

          <View style={style.LikesCommentsContainer}>
                 <View style={style.timeContainer}>
                 <TouchableOpacity onPress={onpressLike.bind(this)} >
                   <Image source={unlike} style={styles.likeIcon}></Image>
                 </TouchableOpacity>
                   <Text style={style.LikeCoutText}>{props.LikeCount}</Text>
                 </View>
                 <View style={style.commentContainer}>
                 <TouchableOpacity onPress={props.onpressComment}>
                   <Image source={comments} style={{width:28,height:28}}></Image>
                   </TouchableOpacity>
                   <Text style={style.LikeCoutText}>{props.CommentsCount}</Text>
                 </View>
         </View>
);

export {LikeSection};