
export const GetUserInput='get user inputs'

export const GetUserInput=(sapData)=>{
    return {
        type:GetUserInput,
        payload:sapData
    }
};

export const Loginfun=(sapData)=>{
    return (dispatch)=>{
        fetch("http://localhost:2695/api/Home/LoginUserFromSap/0",
        method:"POST",
        body: JSON.stringify(sapData) ).catch(error=>console.log(error));
    };
}