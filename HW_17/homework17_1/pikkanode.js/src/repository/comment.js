const pool = require('../db')

const commentImage = async (textComment, pictureId) => {
	await pool.query(`
    INSERT INTO comments (comments.text, comments.picture_id, comments.created_by) VALUES
    (?, ?, 1)
	`, [ textComment, pictureId ])

	// ????
	// return result[0]
}

module.exports = {
	commentImage
}
