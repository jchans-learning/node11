const express = require('express');
const upload = require(__dirname + "/../modules/upload-imgs")
const moment = require('moment-timezone');
const router = express.Router();
const db = require(__dirname + '/../modules/db_connect2')

router.use((req, res, next)=>{
  if (!req.session.admin) {
    return res.redirect('/');
  }
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

  let page = parseInt(req.query.page) || 1;

  let rows = [];

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



// Update
router.get('/:sid/edit', async (req, res)=>{
  const [rows] = await db.query("SELECT * FROM `address_book` WHERE sid = ?", [req.params.sid]);
  if(rows.length !== 1){
    return res.redirect(re.locals.baseUrl + '/list');
  }
  rows[0].birthday = moment(rows[0].birthday).format('YYYY-MM-DD');
  res.render('address-book/edit', rows[0]);
})

// 用 fetch 的方式處理的時候要注意 upload.none()
router.post('/:sid/edit', upload.none(), async (req, res)=>{
  const {name, email, mobile, birthday, address} = req.body;
  const data = {name, email, mobile, birthday, address};

  const [result] = await db.query("UPDATE `address_book` SET ? WHERE sid = ?", [data, req.params.sid]);
  
  // rows[0].birthday = moment(rows[0].birthday).format('YYYY-MM-DD');
  res.json({
    success: result.changedRows===1
  });
})

// Delete
router.delete('/:sid', async (req, res)=>{
  const [result] = await db.query("DELETE FROM `address_book` WHERE sid = ?", [req.params.sid]);
  res.json({
    success: result.affectedRows===1
  });
})

// Create
router.get('/add', async (req, res)=>{
  const output = await listHandler(req);
  res.render('address-book/add', output);
})

// 用 fetch 的方式處理的時候要注意 upload.none()
router.post('/add', upload.none(), async (req, res)=>{
  // const data = {...req.body}; // 比較不好的寫法
  const {name, email, mobile, birthday, address} = req.body;
  const data = {name, email, mobile, birthday, address};
  data.created_at = new Date();
  data.stars = 5;
  const [result] = await db.query("INSERT INTO `address_book` SET ?", [data]);
  console.log(result);
  
if (result.affectedRows===1) {
  res.json({
    success: true,
    bode: req.body,
  });
} else {
  res.json({
    success: false,
    body: req.body,
  });
}
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