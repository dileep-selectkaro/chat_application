const { DataTypes}=require("sequelize");
const sequelize=require("../connection");

const Chatroom=sequelize.define('chatroom',{
    name:{
        type:DataTypes.STRING,
        allowNull:true,
        
    },
    created_by:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            model:"users",
            key:"id"
        }
    }
    });

   


module.exports=Chatroom;