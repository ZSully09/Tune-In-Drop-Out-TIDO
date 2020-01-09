const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432
});

client.connect(error => {
  if (error) {
    console.log('error', error);
  } else {
    console.log('client connected');
  }
});

module.exports = client;
