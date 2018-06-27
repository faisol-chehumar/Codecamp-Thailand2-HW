const pool = require('../db')

const commentImage = async (textComment, pictureId, userId) => {
	await pool.query(`
    INSERT INTO comments (comments.text, comments.picture_id, comments.created_by) VALUES
    (?, ?, ?)
	`, [ textComment, pictureId, userId ])

	// ????
	// return result[0]
}

module.exports = {
	commentImage
}
