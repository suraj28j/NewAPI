const data=require("../database/data");

const getUserDetails=(uId)=>{
    let userDetails;
    data.find(x=>{
        if(x.id==uId)
        userDetails=x;
    })
    return userDetails;
}

const addNewUser=(newUserDetails)=>{
    data.push(newUserDetails);
    return data;
}


module.exports={getUserDetails,addNewUser};