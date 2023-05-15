const mongoose = require('mongoose');

//Connection to the MongoDB Server
mongoose.connect("mongodb://localhost:27017/student2")
    .then(()=>{
        console.log("Connection successful");
    })
    .catch(err =>{
        console.log("Connection failed, error:",err);
    })

//Schema Design
const studentInfo = new mongoose.Schema({
    name:String,
    age:Number,
    percentage:Number,
    address:String,
    isFail:Boolean
});

//Creating a model
const Student = mongoose.model('Student',studentInfo);

//Function to Insert Student Information
const insertStudent = async(name,age,per,add,isFail)=>{
    try{
        const student = new Student({
            name:name,
            age:age,
            percentage:per,
            address:add,
            isFail:isFail
        });
        await student.save();
        console.log("Student Inserted Successfully",student);
    }catch(err){
        console.log("Failed to Insert Student Information",err);
    }
};

// Query: Display student information who has secured more than 90%
const displayToppers = async()=>{
    try{
        const students = await Student.find({percentage: {$gt: 90}});
        console.log("Student who have secured more than 90%", students);
    }catch(err){
        console.log('Failed to fetch students');
    }
};

// Query: Display student information who failed the examination
const displayFailed = async()=>{
    try{
        const students = await Student.find({ isFail: true });
        console.log("Students who have failes: ",students);
    }catch(err){
        console.log('Failed to fetch students');
    }
};

// Query: Display student information who stays in Andheri
const staysAndheri =  async()=>{
    try{
        const students = await Student.find({ address: 'Andheri' });
        console.log("Students who live in Andheri: ",students);
    }catch(err){
        console.log('Failed to fetch students');
    }
};

//insertStudent("Vineet",19,92,'Andheri',false);
//insertStudent("Zayn",24,96,'Bandra',false);
//insertStudent("Weeknd",28,39,'Andheri',true);
//insertStudent("Harry",30,35,'Vile Parle',true);

//displayToppers();
//displayFailed();
staysAndheri();