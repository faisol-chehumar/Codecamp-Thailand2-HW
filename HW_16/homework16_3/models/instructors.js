class Instructor {
  constructor(pool, row) {
      this._pool = pool,
      this.id = row.id,
      this.name = row.name,
      this.created_at = row.created_at
  }
  // CREATE AND UPDATE user
  async save() {
      if (!this.id) { // INSERT MODE if there's no id in userObject
          const sql = `
              INSERT INTO instructors (
                  firstname, lastname, salary, money, json_data
              ) VALUES (
                  ?, ?, ?, ?, ?
              )
          `;
          const jsonData = JSON.stringify(this.jsonData);
          const result = await this._pool.query(sql, [this.firstname, this.lastname, this.salary, this.money, this.jsonData]);
          this.id = result.insertId; // id created automatically by inserting into mySQL
      } else { // UPDATE MODE if there's id already in userObject
          const sql = `
              UPDATE instructors SET
                  firstname = ?, 
                  lastname = ?, 
                  salary = ?, 
                  money = ?, 
                  json_data = ?
              WHERE id = ?
          `;
          const jsonData = JSON.stringify(this.jsonData);
          const result = await this._pool.query(sql, [this.firstname, this.lastname, this.salary, this.money, jsonData, this.id]);
      }

      return true;
  }
}

module.exports = function (pool) {
  return {
      // READ all data from table
      async findAll() {
          const [rows] = await pool.query('SELECT * FROM instructors')
        //   console.log(rows)
          return rows.map( row => new Instructor(pool, row) )
      },
      // READ only one row from table
      async findById(id) {
          const [rows] = await pool.query('SELECT * FROM instructors WHERE id = ?', [id])
        //   console.log(rows[0])
          return new Instructor(pool, rows[0]);
      }
  }
}