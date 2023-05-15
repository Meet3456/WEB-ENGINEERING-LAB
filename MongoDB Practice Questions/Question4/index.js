const mongoose = require('mongoose');
var express = require('express');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/persons')
    .then(()=>{
        console.log("Connection Successfull");
    })
    .catch((err)=>{
        console.log("Failed to Connect")
    })

const personInfo = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});

const Person = mongoose.model('Person',personInfo);

const insertPerson = async(name,age,email)=>{
    try{
        const person = new Person({
            name:name,
            age:age,
            email:email
        });
        await person.save();
        console.log("Person Inserted Successfully");
    }catch(err){
        console.log("Failed to insert",err);
    }
};

//insertPerson("Vineet",19,"vineet@gmail.com");

app.get('/',async (req,res) => {
    try{
        const person =await Person.find();
        res.json(person);
    }catch(err){
        res.status(500).json({ error: 'Failed to fetch persons' });
    }
})

const port = 3005;
app.listen(port,()=>{
    console.log(`Server running on https://localhost${port}`);
})