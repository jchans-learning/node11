// 函式寫法
// const f1 = function (a) {
//     return a*a;
// }
// console.log('f1(6) = ', f1(6));

// 箭頭函示，括號在只有一個變數的時候可以省略
// 多個變數的時候括號不可省略
// 省略大括號的時候會預設自動 return 值，通常程式只有一行？

const f2 = a => a*a
console.log('f2(7) = ', f2(7));

module.exports = f2;