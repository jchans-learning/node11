var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - 找不到網頁');
});

    // 4 開頭是用戶端的錯誤，這一段要放在程式碼相對較後面的位置
    // 嚴謹的規則放前面，寬鬆的規則放後面，沒有後蓋前的規則。

app.listen(3006, function () {
    console.log('啟動 server 監聽 PORT 3006');
})
