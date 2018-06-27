const pool = require('../db')

const likeImage = async (userId, pictureId) => {
	console.log(userId)
	console.log(pictureId)
	await pool.query(`
    INSERT INTO likes (likes.user_id, likes.picture_id) VALUES
    (?, ?)
	`, [ userId, pictureId ])

	// ????
	// return result[0]
}

module.exports = {
	likeImage
}
