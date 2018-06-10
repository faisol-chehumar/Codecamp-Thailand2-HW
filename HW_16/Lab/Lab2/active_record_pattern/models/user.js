class User {
    constructor(pool, row) {
        this._pool = pool;
         
        this.id = row.id,
        this.firstname = row.firstname,
        this.lastname = row.lastname,
        this.salary = row.salary,
        this.money = row.money,
        this.jsonData = JSON.parse(row.json_data)
    }
    // CREATE AND UPDATE user
    async save() {
        if (!this.id) { // INSERT MODE if there's no id in userObject
            const sql = `
                INSERT INTO users (
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
                UPDATE users SET
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
    // DELETE only one row from table
    async remove() {
        // TODO: delete user row by specify id
    }
}

module.exports = function (pool) {
    return {
        // READ all data from table
        async findAll() {
            const [rows] = await pool.query('SELECT * FROM users');
            return rows.map( row => new User(pool, row) );
        },
        // READ only one row from table
        async findById(id) {
            const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
            return new User(pool, rows[0]);
        },
        async findByFirstname(firstname) {
            // TODO: fill in to get user by specify their firstname
        }
    }
}