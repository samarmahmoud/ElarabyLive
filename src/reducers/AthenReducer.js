import GetUserInput from '../actions';

const Initial_State={
   SapData={
       sapNum:'',
       password:''
   }
}

export default =(state=Initial_State,action)=>{
    switch(action.type){
        case GetUserInput:
            return action.payload;
        break;
        default:
        return state;
    }
      
}