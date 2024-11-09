const express = require('express')
const app = express();
const env = require("dotenv")
env.config();
const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("hello backend");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
});