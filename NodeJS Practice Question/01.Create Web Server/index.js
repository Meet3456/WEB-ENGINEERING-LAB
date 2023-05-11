const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, from the server !</h1>');
        res.end();
    }
    else if(req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to the home page!');
        res.end();
    } 
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});