require('dotenv').config();

const express = require('express');

const app = express();

// 設定EJS set 原則上放前面
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Middleware 各自處理能負責的 Content-Type
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello！');
});

app.get('/try-ejs', (req, res) => {
    res.render('a', {name:'Hans!'});
});

app.get('/json-sales', (req, res) => {
    const sales = require(
        __dirname + '/../data/sales'
    );

    res.render('json-sales', {sales});
});

// 練習取得 queryString 的資料
app.get('/try-qs', (req, res) => {
    res.json(req.query);
});

// 練習取得 POST 資料
// 在 Postman 軟體裡測試，注意要選 x-www-form-urlencoded
// body-parser 解析器， middleware
// https://www.npmjs.com/package/body-parser
//
app.post('/try-post', (req, res) => {
    res.json(req.body);
});

app.get('/try-post-form', (req, res) => {
    res.render('try-post-form');
});

app.post('/try-post-form', (req, res) => {
    res.render('try-post-form', req.body);
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
    console.log(`啟動 server 監聽 PORT ${port}`, new Date());
})
