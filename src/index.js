var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3006, function () {
    console.log('啟動 server 監聽 PORT 3006');
})
