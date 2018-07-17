const pool = require('../db')

const searchCaption = async (caption) => {
  // console.log(caption)
	let result = await pool.query(`
  SELECT p.id, p.caption, a.quantity_comment, b.quantity_likes
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
  ) b ON b.picture_id = p.id
  WHERE p.caption LIKE (?)
`, [ '%' + caption + '%' ])

  // console.log(result)
	// ????
	return result[0]
}

module.exports = {
	searchCaption
}
