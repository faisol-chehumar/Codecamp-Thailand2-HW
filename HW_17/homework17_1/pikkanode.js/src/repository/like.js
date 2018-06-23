const pool = require('../db')

const likeImage = async (pictureId) => {
	await pool.query(`
    INSERT INTO likes (likes.user_id, likes.picture_id) VALUES
    (1, ?)
	`, [ pictureId ])

	// ????
	// return result[0]
}

module.exports = {
	likeImage
}
