import {Actions} from 'react-native-router-flux';

export const GETUSERINPUTE='get user inputs'

export const GetUserInput=(sapData)=>{
    return {
        type:GETUSERINPUTE,
        payload:sapData
    }
};

export const Loginfun=(sapData)=>{
    console.log(sapData);
    return (dispatch)=>{
        // fetch('http://localhost:2695/api/Home/LoginUserFromSap/0',{
        // method:'POST',
        // body: JSON.stringify(sapData)})
        // .then(response => response.json()).then(json => console.log(json))
        // .catch(console.log(sapData))
        fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

    }
}; 