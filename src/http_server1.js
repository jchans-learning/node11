// src/http_server1.js

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf8'
    });
    res.end(`
        <h2>Hello 我要說中文！</h2>
        <p>${req.url}
    `);
});
server.listen(3000);