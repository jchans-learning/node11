const express = require('express');
const router = express.Router();
const db = require(__dirname + '/../modules/db_connect2')

router.get('/list', async (req, res)=>{
  const output = {
    perPage: 10,
  };
  const [t_rows] = await db.query("SELECT COUNT(1) num FROM `address_book`")
  output.totalRows = t_rows[0].num;
  output.totalPages = Math.ceil(output.totalRows/output.perPage)

  let page = parseInt(req.query.page) || 1;

  const [rows] = await db.query("SELECT * FROM `address_book` ORDER BY `sid` DESC LIMIT ?, ?", 
  [(page-1)*output.perPage, output.perPage]);
  output.rows = rows;
  res.json(output)
  //
  // res.render('address-book/list', output);
  
})

module.exports = router;