const { DataTypes}=require("sequelize");
const sequelize=require("../connection");

const Message=sequelize.define('messages',{
    message_info:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sender_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"users",
            key:"id"
        }
    },
    chatroom_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"chatrooms",
            key:'id'
        }
    }
});

module.exports=Message;