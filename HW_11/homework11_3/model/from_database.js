const db = require('../lib/db.js') 

async function getDataFromDb() {
  const result = await db.pool.query('SELECT * FROM users;')
  return result
}

module.exports.getDataFromDb = getDataFromDb