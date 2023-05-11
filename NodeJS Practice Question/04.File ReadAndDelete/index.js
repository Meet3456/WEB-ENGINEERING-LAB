var http=require('http')
var fs=require('fs')

//Reading the file 
const file=fs.readFileSync('data.txt');
console.log(file.toString());

//DeletING the file
fs.unlink('data.txt',function(err){
    if(err) throw err;
    console.log('File deleted');
});
