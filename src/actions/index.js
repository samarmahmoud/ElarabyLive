import {Actions} from 'react-native-router-flux';

export const GETUSERINPUTE='get user inputs'

export const GetUserInput=(sapData)=>{
    return {
        type:GETUSERINPUTE,
        payload:sapData
    }
};

export const Loginfun=(sapData)=>{
    //console.log(sapData);
    return (dispatch)=>{
         fetch('http://192.168.201.1:2695/api/Home/LoginUserFromSap/0',{
         method:'POST',
         headers: { 
             'Accept': 'application/json',
         'Content-Type': 'application/json'},
         body: JSON.stringify({
             sap:'50011436',
             password:'123456'})
         .then(Actions.NewFeed());
         
    };
}; 
 