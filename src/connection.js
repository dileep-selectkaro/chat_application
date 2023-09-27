const Sequelize=require("sequelize");

const sequelize=new Sequelize("chat_application","root","",{
    dialect: "mysql", 
    host:"127.0.0.1",  
    port: 3306, 
});

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Table and model synced successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });




  // (async ()=>{
//     try {
//         await sequelize.authenticate();
//         console.log("Connection to the databasesuccessfully");
//         return sequelize.sync(); 
//     } catch (error) {
//       console.log("Unable to connect to the database",error)  
//     }
// })()


module.exports=sequelize;