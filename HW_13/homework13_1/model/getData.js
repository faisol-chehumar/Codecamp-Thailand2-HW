const db = require('../lib/db.js')

async function getData() {
  let query_1 = await db.query(`SELECT instructors.name, courses.teach_by FROM instructors
  LEFT JOIN courses ON courses.teach_by = instructors.id
  WHERE courses.teach_by IS NULL;`)

  let query_2 = await db.query(`SELECT courses.name FROM courses
  WHERE courses.teach_by IS NULL;`)

  let results = {
    query_1: query_1,
    query_2: query_2 
  }
  
  return result
}

module.exports = getData