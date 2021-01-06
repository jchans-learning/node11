// 第一次 require 的時候會執行一次被 require 的 func
// 會紀錄被 require 的東西，再次 require 得到的會是相同的東西
// 所以不會再執行一次

const your_name = require('./func')
const your_name2 = require('./func')

console.log(your_name===your_name2);