// functions/saveData.js
const { Client } = require('pg');

exports.handler = async function(event, context) {
  const client = new Client({
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();

  // Example: saving form data
  const { name, college } = JSON.parse(event.body);

  const res = await client.query(
    'INSERT INTO students(name, college) VALUES($1, $2)',
    [name, college]
  );

  await client.end();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Data saved successfully' })
  };
};
