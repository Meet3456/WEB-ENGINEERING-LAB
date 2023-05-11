var http = require("http");
var fs = require("fs");

//Reading the file
const ogFile=fs.readFileSync('data.txt');
console.log(ogFile.toString());

//Updating the file
fs.writeFile('data.txt','Hello world, updating the file with the help of fs module',function(err){
    if(err) throw err;
    console.log('Data written to file');
});

// Note previous content in the file will be lost if we use writeFile
//we make use of appendFile to append the new text data while modifying the file

//Reading the updated file
const updatedFile=fs.readFileSync('data.txt');
console.log(updatedFile.toString());