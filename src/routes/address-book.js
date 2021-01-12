const express = require('express');
const router = express.Router();
const db = require(__dirname + '/../modules/db_connect2')

router.get('/list', async (req, res)=>{
  const output = {

  };

  const [rows] = await db.query("SELECT * FROM `address_book` ORDER BY `sid` DESC LIMIT 6")
  output.rows = rows;
  res.json(output)
  //
  // res.render('address-book/list', output);
  
})

module.exports = router;