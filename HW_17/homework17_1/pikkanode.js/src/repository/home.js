const pool = require('../db')

const getImage = async () => {
	const result = await pool.query(`
		SELECT id, caption FROM pictures
	`)

	// ????
	return result[0]
}

module.exports = {
	getImage
}
