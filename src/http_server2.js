// src/http_server1.js

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.writeFile(__dirname + '/header01.txt', JSON.stringify(req.headers), error => {
        if (!error) {
            res.end('ok');
        } else {
            res.end('error' + error)
        }
    });
});
server.listen(3000)