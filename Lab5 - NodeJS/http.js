var http=require('http') 
http.createServer(function(req,res) { 
        res.write("Hello all from port 4000") 
        res.end() 
    } 
).listen(4000) 