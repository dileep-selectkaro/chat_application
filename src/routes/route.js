const express=require("express");
const {register_user, login_user} = require("../controllers/user_controller");
const { create_chatroom, get_chatrooms, delete_chatroom, get_messages, create_message } = require("../controllers/chatroom_controller");
const router=express.Router()



router.post("/register_user",register_user);
router.post("/login_user",login_user);

router.post("/chatrooms",create_chatroom);
router.get("/get_chatrooms",get_chatrooms);
router.delete("/chatrooms/:id",delete_chatroom);


router.get("/chatrooms/getMessages/:chatroom_id",get_messages);
router.post("/chatrooms/createMessage",create_message);


module.exports=router




