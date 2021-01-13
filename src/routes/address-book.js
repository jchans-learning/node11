const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + "/../modules/upload-imgs")
const router = express.Router();
const db = require(__dirname + '/../modules/db_connect2')

router.use((req, res, next)=>{
  res.locals.baseUrl = req.baseUrl;
  res.locals.url = req.url;
  next();
});

// async 本身回傳一個 Promise 物件，非同步的動作，不能沒有 await
const listHandler = async (req, res)=>{
  const perPage= 10;
  const [t_rows] = await db.query("SELECT COUNT(1) num FROM `address_book`");
  const totalRows = t_rows[0].num;
  const totalPages = Math.ceil(totalRows/perPage);

  let rows = [];

  let page = parseInt(req.query.page) || 1;
  if(totalRows > 0){
    if(page < 1) page = 1;
    if(page > totalPages) page = totalPages;

    [rows] = await db.query("SELECT * FROM `address_book` ORDER BY `sid` DESC LIMIT ?, ?", 
    [(page-1)*perPage, perPage]);
    rows.forEach(item=>{
      item.birthday2 = moment(item.birthday).format('YYYY-MM-DD');
    })
  }
  return {
    perPage,
    totalRows,
    totalPages,
    page,
    rows,
  }
};

  // res.render('address-book/list', {
  //   perPage,
  //   totalRows,
  //   totalPages,
  //   page,
  //   rows,
  // })
  
  // res.render('address-book/list', output);
  // 如過果要改路由，例如用在 /address-book/ 要怎麼寫？

router.get('/add', async (req, res)=>{
  const output = await listHandler(req);
  res.render('address-book/add', output);
})

router.post('/add', upload.none(), async (req, res)=>{
  res.json({...req.body, success: true});
})

router.get('/list', async (req, res)=>{
  const output = await listHandler(req);
  res.render('address-book/list', output);
})

router.get('/api/list', async (req, res)=>{
  const output = await listHandler(req);
  res.json(output);
})

module.exports = router;