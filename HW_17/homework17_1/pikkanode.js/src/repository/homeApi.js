const pool = require('../db')

const getImage = async () => {
	const result = await pool.query(`
		SELECT id, caption, p.created_at as createdAt, a.quantity_comment as commentCount, b.quantity_likes as likeCount
		FROM pictures p
		LEFT JOIN (
			SELECT c.picture_id, COUNT(c.id) AS quantity_comment
				FROM comments c
			GROUP BY c.picture_id
		) a ON a.picture_id = p.id
		LEFT JOIN (
			SELECT l.picture_id, COUNT(l.user_id) AS quantity_likes
			FROM likes l
			GROUP BY l.picture_id
		) b ON b.picture_id = p.id;
	`)

	// ????
	return result[0]
}

module.exports = {
	getImage
}
