const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'laohanj',
  password: '123456',
  database: 'mfee11c',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise(); // 匯出 promise pool