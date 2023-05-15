const mongoose = require('mongoose');

//Connecting the MongoDB Server
mongoose.connect("mongodb://localhost:27017/student1")
    .then(()=>{
        console.log("Connection successful");
    })
    .catch(err =>{
        console.log("Connection failed, error: ",err);
    });

//Defining the schema
const studentInfo = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

//Creating a model for our collection
const Student = mongoose.model('Student',studentInfo);

//Function to insert a new student
const insertStudent = async(name,age,email)=>{
    try{
        const student = new Student({
            name:name,
            age:age,
            email:email
        });
        await student.save();
        console.log("Student inserted successfully",student);
    } catch(err){
        console.log("Failed to insert student, error:",err);
    }
};

// Function to update student information
const updateStudent = async(name,newAge)=>{
    try{
        const student = await Student.findOneAndUpdate({ name: name }, { age: newAge }, { new: true });
        console.log('Student updated successfully:', student);
    } catch(err){
        console.log("Failed to update student, error: ", err);
    }
};

// Function to delete student information
const removeStudent = async(name)=>{
    try{
        const student = await Student.findOneAndRemove({ name: name });
        console.log('Student removed successfully:', student);
    }catch (err) {
        console.error('Failed to remove student, error: ', err);
    }
};

//insertStudent("Vineet Chotaliya",18,"vineet@test.com");
//insertStudent("Zayn Malik",20,"zayn@songs.com");
//updateStudent("Zayn Malik",30)
//updateStudent("Vineet Chotaliya",19)
removeStudent("Zayn Malik");