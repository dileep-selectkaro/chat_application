const User=require("../models/user_model")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const  register_user=async(req,res)=>{
    const{name,email,password}=req.body;
    if(!name){
        return res.status(400).send({status:false,message:"name field missing"});
    }
    if(!email){
        return res.status(400).send({status:false,message:"email field missing"});
    }
    if(!password){
        return res.status(400).send({status:false,message:"password field missing"});
    }
    try {
        const existing_user=await User.findOne({where:{email}});
        if(existing_user){
            return res.status(400).send({status:false,error:"User  with this email already register"})
        } 
        const hash_password=await  bcrypt.hash(password,12);
        const new_user=await User.create({name,email,password:hash_password});
        res.status(201).send({status:true,message:"User created Successfully",new_user});

    } catch (error) {
        res.status(500).send({status:false,error:"Server error",error});
    }
}


const login_user= async (req,res)=>{
const{email,password}=req.body;
if(!email){
    return res.status(400).send({status:false,message:"email field missing"});
}
if(!password){
    return res.status(400).send({status:false,message:"password field missing"});
}
   try {
         const user= await User.findOne({where:{email:email}});
         if(!user){
            return res.status(400).send({status:false,error:"Invalid user"});
         }

         const match_password=await bcrypt.compare(password,user.password);

         if(match_password){
            const token=jwt.sign({email:user.email},'Dileep',{expiresIn:"8h"});
            res.setHeader("token",token)
            res.status(200).send({status:true,message:"token successfully generated"});
         }
         else{
            return res.status(400).send({status:false,error:"Invalid user credencial"});
         }
   } catch (error) {
      res.status(500).send({status:false,error:"Server Error",error});
   }


}


module.exports={register_user,login_user}