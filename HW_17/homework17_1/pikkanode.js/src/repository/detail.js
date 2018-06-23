const pool = require('../db')

const getImageDetail = async (id) => {
	const result = await pool.query(`
		SELECT p.id, p.caption, comments.text, users.email
		FROM pictures p
		LEFT JOIN comments ON comments.picture_id = p.id 
		LEFT JOIN users ON users.id = p.created_by
    WHERE p.id = ?
	`, [ id ])

	// ????
	return result[0]
}

module.exports = {
	getImageDetail
}
