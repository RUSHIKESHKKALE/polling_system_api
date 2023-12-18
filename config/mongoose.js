const dotenv=require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const url=process.env.DB_URL || "mongodb+srv://clouduser:ltd2233@cluster0.lqs0kjp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;