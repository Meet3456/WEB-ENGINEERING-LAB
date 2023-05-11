const express= require('express')
const mongoose=require('mongoose')
const app=express()
const bodyparser=require("body-parser")
mongoose.connect('mongodb://localhost')

const schema1=new mongoose.Schema({userid:String, pwd:String})

const login = mongoose.model("login",schema1)

app.use(bodyparser.urlencoded({ extended: true }))
app.get('/',function(req,res){
    res.sendFile("C:/Users/sanjay patel/Desktop/Lab6-MongoDB+ExpressJS/expressinput.html")
})

app.post('/',function(req,res){
   console.log(req.body)
   const b1= new login(req.body)
   b1.save()
   res.send(req.body.userid+ "Login added successfully")
})
app.listen(3000)