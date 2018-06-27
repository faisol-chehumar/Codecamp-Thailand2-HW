const pool = require('../db')

const getImageDetail = async (id) => {
	const result = await pool.query(`
		SELECT p.id, p.caption, comments.text, u.email AS comment_by, users.email
		FROM pictures p
		LEFT JOIN comments ON comments.picture_id = p.id 
		LEFT JOIN users ON users.id = p.created_by
		LEFT JOIN users u ON u.id = comments.created_by
    WHERE p.id = ?
	`, [ id ])

	// ????
	return result[0]
}

const isLike = async (userId, pictureId) => {
	// console.log(userId)
	// console.log(pictureId)
	let isLike = await pool.query(`
	SELECT * FROM likes
	WHERE likes.user_id = ?
	AND likes.picture_Id = ?
	`, [ userId, pictureId ])

	// ????
	return isLike[0]
}

const deleteLike = async (userId, pictureId) => {
	// console.log(userId)
	// console.log(pictureId)
	await pool.query(`
	DELETE FROM likes
	WHERE likes.user_id = ?
	AND likes.picture_Id = ?
	`, [ userId, pictureId ])

	// ????
}

module.exports = {
	getImageDetail,
	isLike,
	deleteLike
}
