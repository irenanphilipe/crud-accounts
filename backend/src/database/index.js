const { Client } = require('pg');

const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
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