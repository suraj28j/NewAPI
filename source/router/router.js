const express=require("express");
const router=express.Router();
const loginController=require("../controller/loginController");

router.get("/login/:Id",loginController.userLogin);
router.post("/user",loginController.newUser)

module.exports=router;

