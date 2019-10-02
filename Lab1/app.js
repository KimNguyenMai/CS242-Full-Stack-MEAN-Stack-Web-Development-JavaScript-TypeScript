'use strict'
const http = require('http');

const port = 4000;
const hostname = 'localhost'

const server = http 
createServer ((req, res) => {
    let content;
    if (req.url === '/' || req.url === '/home')
    content = 'This is my home page'
    else if (req.url === '/address')
    content = '<h2>This is my address page</h2>'
    else content = '<h1> 404 not found</h1>'
});

$.getJSON('https://httpbin.org/ip', function(data) {
                console.log(data['origin']);
});

server.listen(port, () => console.log('Server is running at http://${hostname}:${port}'));
