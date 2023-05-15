const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/myDB2')
    .then(()=>{
        console.log("Connection to the Database successfull");
    }).catch((err)=>{
        console.log("Connection failed ",err);
    })

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const People = mongoose.model('People',peopleSchema);

const insertPeople = async(name,age)=>{
    try{
        const people = new People({
            name:name,
            age:age
        });
        await people.save();
        console.log("Record inserted successfully",people);
    }catch(err){
        console.log("Unable to insert record", err);
    }
};

//insertPeople("Vineet",19);
//insertPeople("John",32);
//insertPeople("Hello",26);

app.get('/',async (req,res)=>{
    try{
        const person = await People.findOne();
        res.json(person);
    }catch(err){
        res.status(500).json({ error: 'Failed to fetch person' });
    }
})

const port = 3010;
app.listen(port,()=>{
    console.log(`Server Running on https://localhost${port}`);
})