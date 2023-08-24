const loginService=require("../service/login");

const userLogin=(req,res,next)=>{
    let userId=req.params.Id;
    let userDetails=loginService.getUserDetails(userId);
    res.send({Message:"Data Matched Successfully",userDetails});
}

const newUser=(req,res,next)=>{
    let userDetails=req.body;
    let updatedData=loginService.addNewUser(userDetails);
    res.send({Message:"New User Added Successsfully",updatedData})
}


module.exports={userLogin,newUser}