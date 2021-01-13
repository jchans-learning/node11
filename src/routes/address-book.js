const express = require('express');
const router = express.Router();
const db = require(__dirname + '/../modules/db_connect2')

router.get('/list', async (req, res)=>{
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
  }

  res.json({
    perPage,
    totalRows,
    totalPages,
    page,
    rows,
  })
  
  // res.render('address-book/list', output);

  // 如過果要改路由，例如用在 /address-book/ 要怎麼寫？
  
})

module.exports = router;