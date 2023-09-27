const Chatroom=require("../models/chatroom_model");
const Message=require("../models/message_model");
const create_chatroom=async (req,res)=>{
    const {name,user_id}=req.body;
    try {
        const chatroom=await Chatroom.create({name,user_id});
        res.status(201).send({status:true ,message:"Chatroom created successfully",chatroom});
    } catch (error) {
        console.log("create Chatroom:",error);
       res.status(500).send({status:false,message:"Server Error",error}); 
    }
};


const get_chatrooms=async  (req,res)=>{
    try {
       const chatroom=await  Chatroom.findAll();
       res.status(200).send({status:true, message:"getched chatrooms Details",chatroom}); 
    } catch (error) {
        res.status(500).send({status:false,message:"Server Error",error}); 
        
    }
}


const delete_chatroom=async (req,res)=>{
    const chatroom_id=req.params.id;
    try {
        await Chatroom.destroy(
            {
                where:{id:chatroom_id}
            });
            res.status(200).send({status:true,message:"Chatroom deleted  successfully"});
    } catch (error) {
        res.status(500).send({status:false,message:"Server Error",error}); 

        
    }
};


const get_messages=async(req,res)=>{
    const chatroom_id=req.params.chatroom_id;
    try {
        const messages=await Message.findAll({
            where:{
                chatroom_id:chatroom_id
            }
        });
        res.status(200).send({status:true,message:"fetched Messages",messages})
    } catch (error) {
        res.status(500).send({status:false,message:"Server Error",error}); 
        
    }
};


const create_message=async(req,res)=>{
    const {message_info,sender_id,chatroom_id}=req.body;
    try {
      const message=await  Message.create({message_info,sender_id,chatroom_id});
      res.status(201).send({status:true,message:"Message sent successfully",message});  
    } catch (error) {
        res.status(500).send({status:false,message:"Server Error",error}); 
        
    }
}



module.exports={create_chatroom,get_chatrooms,delete_chatroom,get_messages,create_message}








