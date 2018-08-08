import GETUSERINPUTE from '../actions';

const Initial_State={
   SapData:{
       sapNum:'',
       password:''
   }
};

export default (state=Initial_State,action)=>{
    console.log(action.type);
    switch(action.type){
        case GETUSERINPUTE:
            return {...state,SapData:action.payload};
        break;
        default:
        return state;
    }
      
} 