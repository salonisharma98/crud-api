const express= require('express');
const mongoose= require('mongoose');
const user = require('./models/user');
const router = require('./routes/users');
const url = 'mongodb://localhost/UserData';

const app=express();

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true ,useFindAndModify:false});

//to get hold on connection
const con=mongoose.connection;

con.on('open', function() {
   console.log('connected...'); 
})

app.use(express.json());

const userRouter=require('./routes/users');
app.use('/users', userRouter);



app.listen(3000,()=>{
    console.log('listening to port 3000');
})