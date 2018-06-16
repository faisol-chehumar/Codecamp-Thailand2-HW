const mysql = require('mysql2/promise')

const pool = mysql.createPool({
	user: 'root',
	host: 'localhost',
	database: 'pikkanode_db',
	password: 'secret',
	connectionLimit: 10
})

module.exports = pool
