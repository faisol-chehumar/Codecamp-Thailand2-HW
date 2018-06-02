const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'secret',
  database        : 'codecamp'
})

module.exports.pool = pool