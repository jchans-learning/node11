// 第一次 require 的時候會執行一次被 require 的 func
// 會紀錄被 require 的東西，再次 require 得到的會是相同的東西
// 所以不會再執行一次
//
const your_name = require('./func')
const your_name2 = require('./func')

// 兩次 require 同一個東西，他們是嚴格相等
console.log(your_name===your_name2);

// 匯出匯入的檔案，如果用 Object 包著多個函式，可以如下使用
// 也可以用 Array 匯出，但比較常用 Object
//
console.log(
    your_name.f1(10),
    your_name.f2(20)
);

// 或者用解構的方式 import
//
const {f1: func1, f2}  = require('./func')

// 解構的同時可更換函式名稱
console.log(func1(33));
console.log(f2(44));