const express=require('express')
const bodyparser=require('body-parser')
const app=express()
const mongoose= require('mongoose')
//const Library =require('./schema')
 mongoose.connect('mongodb://localhost/DJSCE')

 const schema1=new mongoose.Schema({
    Title:String,
    ISBN:Number
}) 
const Book=new mongoose.model("Book",schema1);

// const doc1=new Book({
//     Title:"Maths",
//     ISBN:200
// }) 

// doc1.save()

app.get('/books', function(req, res) {
    Book.find(function(err, data) {
                    res.send(data);
        }
    ) 
 })

 app.get('/books/findfirst', function(req, res) {
    Book.findOne({"Title":"vineet"},
    function(err, data) {
            res.send(data.ISBN.String());
    })  
})



app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static("C:/Users/sanjay patel/Desktop/Lab6-MongoDB+ExpressJS/expressinput.html"))
app.get('/',function (req,res){
 res.sendFile("C:/Users/sanjay patel/Desktop/Lab6-MongoDB+ExpressJS/main.html")
    //res.download("main.js")
 
})
app.post('/',function (req,res){
    const record= req.body
    console.log(req.body)
    const doc1=new Book(record)
    doc1.save()
    //const response=Library.create(record)
   // console.log(response)
    res.send(req.body.Title+" Book Added Successfully")
})
app.listen(3000)