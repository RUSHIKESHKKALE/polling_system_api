const dotenv=require('dotenv');
dotenv.config();
const Port=process.env.PORT || 3500;
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
const db=require('./config/mongoose');

// Routes
app.use('/',require('./routes/index'));
   
app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",Port);
})