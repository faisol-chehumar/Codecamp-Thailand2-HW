const pool = require('../db')

const uploadImage = async (id, caption, createdBy) => {
	await pool.query(`
		insert into pictures
			(id, caption, created_by)
		values
			(?, ?, ?)
	`, [ id, caption, createdBy ])
	return 1
}

module.exports = {
	uploadImage
}


