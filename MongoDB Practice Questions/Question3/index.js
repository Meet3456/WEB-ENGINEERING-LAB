const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/songs')
    .then( ()=>{
        console.log("Connection Successfull");
    })
    .catch((err)=>{
        console.log("Connection failed, error:",err);
    })

//Schema Design
const Songs = new mongoose.Schema({
    name:String,
    artist:String,
    rating:Number
});

//Creating a model
const Song = mongoose.model('Song',Songs);

//Function to insert songs
const insertSong = async(name,artist,rat)=>{
    try{
        const song = new Song({
            name:name,
            artist:artist,
            rating:rat
        });
        await song.save();
        console.log("Song Inserted Successfully");
    }catch(err){
        console.log("Could not insert song, error:",err);
    }
}

insertSong("The Night We Met","Lord Huron",10);
insertSong("Entertainer","Zayn",9);
insertSong("Black and White","Niall Horan",8);