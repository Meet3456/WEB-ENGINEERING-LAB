const express = require('express')
const app = express()
const path =require('path')
const bodyparser=require("body-parser")
//app.use(express.static("C:/Users/kanchan.dabre/Desktop/Web Eng/Express JS/public"))

app.use(bodyparser.urlencoded({ extended: true }));

app.post('/',function(req,res){
    console.log('post request');
    res.sendFile('E:/Nilesh WE/Express/express2.html');
});

/*app.post('/user',function(req,res){
    console.log('post request');
    res.send('Username and password is Correct');
});*/

app.post('/user',function(req,res){
    console.log(req.body);
    res.send('Username and password is Correct');
});

app.get('/',function(req,res){
    console.log('get request');
    res.sendFile('E:/Nilesh WE/Express/express1.html')
})
app.get('/user',function(req,res){
    res.sendFile('E:/Nilesh WE/Express/express1.html')
})

app.listen(3000)