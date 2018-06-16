module.exports = {
  async createEntity(row) {
    // console.log(row)
    if (!row.id)
      return [];
      
    return {
      id: row.id,
      firstname: row.name,
      createdAt: row.created_at
      // jsonData: JSON.parse(row.json_data)
    }
  },
  // READ all data from table
  async findAll(pool) {
    const [rows] = await pool.query('SELECT * FROM instructors')
    return rows.map(this.createEntity)
  },
  // READ only one row from table
  async findById(pool, id) {
    const [rows] = await pool.query('SELECT * FROM instructors WHERE id = ?', [id])
    console.log(rows[0])
    return this.createEntity(rows[0])
  }
}