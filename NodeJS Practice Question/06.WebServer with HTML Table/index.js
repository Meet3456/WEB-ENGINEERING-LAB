const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } 
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
        });
    } 
    else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});