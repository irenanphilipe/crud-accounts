const db = require('../../database/index')

class AccountsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM accounts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM accounts WHERE id = $1', [id]);
    return row;
  }

  async findByUsername(username) {
    const [row] = await db.query('SELECT * FROM accounts WHERE username = $1', [username]);
    return row;
  }

  async create({ name, zipcode, email, username, password }) {
    const [row] = await db.query(`
      INSERT INTO accounts(name, zipcode, email, username, password) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [name, zipcode, email, username, password]);

    return row;
  }

  async update(id, { name, zipcode, email, username, password }) {
    const [row] = await db.query(`
      UPDATE accounts
      SET name = $1, zipcode = $2, email = $3, username = $4, password = $5
      WHERE id = $6
      RETURNING *
    `, [ name, zipcode, email, username, password, id ]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM accounts WHERE id = $1', [id]);
    return deleteOp;
  }
  
}

module.exports = new AccountsRepository();