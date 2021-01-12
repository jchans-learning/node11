require('dotenv').config();

const express = require('express');
const session = require('express-session');
const multer = require('multer');
// const upload = multer({dest:'tmp_upload/'})
const upload = require(__dirname + "/modules/upload-imgs")

const app = express();

// 設定EJS set 原則上放前面
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Middleware 各自處理能負責的 Content-Type
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: 'aosdjsdfrnv028nv;oeufzixcyuhRFASDVZSCvasvalkns;ov0nq83rnv;alefvdfadsv',
    cookie: {
        maxAge: 1800000
    }
}))

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

app.post('/try-upload', upload.single('avatar'), (req, res) => {
    res.json({
        file: req.file,
        body: req.body,
    })
})

app.post('/try-upload2', upload.array('photo'), (req, res) => {
    res.json(req.files);
})

app.get('/my-params1/:action/:id', (req, res) => {
    req.params.second = true;
    res.json(req.params);
});

app.get('/my-params1/:action?/:id?', (req, res) => {
    req.params.first = true;
    res.json(req.params);
});

// 在路由上用 Regular Expression
app.get(/^\/m\/09\d{2}-?\d{3}-?\d{3}$/i, (req, res) => {
    let u = req.url.slice(3)
    u = u.split('?')[0]; // query string 的部分不要
    // u = u.split('-').join('');
    u = u.replace(/-/g, '');
    res.send(u);
});

// 原則上較嚴格的路由放前面
app.use('/ttt', require(__dirname + '/routes/admin2'))
// 不同路徑，但可用同一個路由處理
app.use('/', require(__dirname + '/routes/admin2'))


app.get('/try-session', (req, res)=>{
    req.session.my_var = req.session.my_var || 0;
    req.session.my_var++;

    res.json({
        my_var:req.session.my_var,
        session: req.session
    });
    
});


// 測試 xhr async
// 參考資料： https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
//
app.get('/pending', (req, res)=>{
    res.send('ok');
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
