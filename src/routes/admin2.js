const express = require('express');

const router = express.Router();

router.use((req, res, next)=>{
  res.locals.hans = "777";
  // 樣板的 locals 就是 res.locals

  // 測試
  // res.send('middle');
  
  // middlewere 一定要有 next() 來指示往下傳遞
  next();
})


const handler1 = (req, res)=>{
  res.json({
    params: req.params,
    url: req.url,
    baseUrl: req.baseUrl,
    locals: res.locals,
  });
}

router.get('/admin2/:p1?/:p2?', handler1);
router.get('/admin2a/:p3?/:p4?', handler1);

module.exports = router;