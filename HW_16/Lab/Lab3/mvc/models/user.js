module.exports = {
    async createEntity(row) {
        if (!row.id)
            return [];
         
        return {
            id: row.id,
            firstname: row.firstname,
            lastname: row.lastname,
            salary: row.salary,
            money: row.money,
            jsonData: JSON.parse(row.json_data)
        }
    },
    // READ all data from table
    async findAll(pool) {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows.map(this.createEntity);
    },
    // READ only one row from table
    async findById(pool, id) {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return this.createEntity(rows[0]);
    },
    // CREATE AND UPDATE user
    async store(pool, userObject) {
        if (!userObject.id) { // INSERT MODE if there's no id in userObject
            const sql = `
                INSERT INTO users (
                    firstname, lastname, salary, money, json_data
                ) VALUES (
                    ?, ?, ?, ?, ?
                )
            `;
            const jsonData = JSON.stringify(userObject.jsonData);
            const result = await pool.query(sql, [userObject.firstname, userObject.lastname, userObject.salary, userObject.money, jsonData]);
            userObject.id = result.insertId; // id created automatically by inserting into mySQL
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
            const jsonData = JSON.stringify(userObject.jsonData);
            const result = await pool.query(sql, [userObject.firstname, userObject.lastname, userObject.salary, userObject.money, jsonData, userObject.id]);
        }

        return userObject;
    },
    // DELETE only one row from table
    async remove(pool, id) {
        // TODO: delete user row by specify id
    },
    async findByFirstname(pool, firstname) {
        // TODO: fill in to get user by specify their firstname
    }
}