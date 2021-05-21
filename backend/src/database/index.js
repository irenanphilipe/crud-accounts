const { Client } = require('pg');

const client = new Client({
  //host: process.env.PG_HOST,
  host: 'localhost',
  //port: process.env.PG_PORT,
  port: 5432,
  //user: process.env.PG_USER,
  user: 'admin',
  //password: process.env.PG_PASSWORD,
  password: 'admin',
  //database: process.env.PG_DB,
  database: 'myaccounts'
});

client.connect(err => {
  if (err) {
    console.log('Erro tentando conectar!');
    console.log(err);
  } else {
    console.log('Conectado com sucesso!');
  }
});

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
}