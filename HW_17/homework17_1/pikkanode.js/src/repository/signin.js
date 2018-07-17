const pool = require('../db')

const getUser = async (email) => {
	const result = await pool.query(`
    SELECT users.id, users.password FROM users
    WHERE users.email = (?)
	`, [ email ])

	// ????
	// console.log(result[0])
	return result[0]
}

const getPasswordByEmail = async (email) => {
	const result = await pool.query(`
    SELECT users.password FROM users
    WHERE users.email = (?)
	`, [ email ])

	// ????
	// console.log('result: ')
	// console.log(result[0].password)
	return result[0]
}

module.exports = {
	getUser,
	getPasswordByEmail
}
