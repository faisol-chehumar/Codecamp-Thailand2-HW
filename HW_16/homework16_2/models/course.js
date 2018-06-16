module.exports = {
  async createEntity(row) {

    if (!row.id)
      return []
      
    return {
      id: row.id,
      firstname: row.name,
      createdAt: row.created_at
    }
  },
  // READ all data from price
  async findByPrice(pool, price) {
    const [rows] = await pool.query('SELECT * FROM courses WHERE price = ?', [price])
    // console.log('find by price')
    // console.log(rows)
    return rows.map(this.createEntity)
  },
  // READ only one row from table
  async findById(pool, id) {
    const [rows] = await pool.query('SELECT * FROM courses WHERE id = ?', [id])
    // console.log('find by id')
    // console.log(rows[0])
    return this.createEntity(rows[0])
  }
}