const express=require("express");
const app=express();
const port=4000
const route=require("./routes/route");
app.use(express.json());


app.use("/",route);


app.listen(port,()=>{
    console.log("Server is  Running on port",port);
})




