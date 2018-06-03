const db = require('../lib/db.js')

async function getData() {
  let query_1 = await db.query(`SELECT enrolls.course_id, courses.name, courses.price FROM enrolls
  INNER JOIN courses on enrolls.course_id = courses.id
  UNION
  SELECT 'Total', '' , SUM(courses.price) FROM enrolls
  INNER JOIN courses on enrolls.course_id = courses.id;`)

  let query_2 = await db.query(`SELECT students.name AS Name, SUM(courses.price) AS 'Total Price' FROM enrolls
  INNER JOIN courses on enrolls.course_id = courses.id
  INNER JOIN students on students.id = enrolls.student_id
  GROUP BY enrolls.student_id;`)

  let results = {
    query_1: query_1,
    query_2: query_2 
  }
  
  return results
}

module.exports = getData