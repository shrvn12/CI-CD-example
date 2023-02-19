const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    value = 100;
    res.send({msg:"welcome"})
})

app.listen(4500,()=>{
    console.log("you are live at 4500");
})