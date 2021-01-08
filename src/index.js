require('dotenv').config();

const express = require('express');

const app = express();

// 設定EJS set 原則上放前面
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello！');
});

app.get('/try-ejs', (req, res) => {
    res.render('a', {name:'Hans!'});
});

// 404 放在最後面
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - 找不到網頁');
    // 合併寫法
    // res.status(404).send('404 - 找不到網頁');
});

    // 4 開頭是用戶端的錯誤，這一段要放在程式碼相對較後面的位置
    // 嚴謹的規則放前面，寬鬆的規則放後面，沒有後蓋前的規則。

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`啟動 server 監聽 PORT ${port}`);
})
