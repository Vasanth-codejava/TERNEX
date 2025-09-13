// functions/saveData.js
const { Client } = require('pg');

exports.handler = async function (event, context) {
  const client = new Client({
    connectionString: process.env.DB_URL, // your Netlify env variable
    ssl: { rejectUnauthorized: false }    // required for Neon
  });

  try {
    await client.connect();

    const { name, college } = JSON.parse(event.body);

    // Adjust table & columns according to your DB
    await client.query(
      'INSERT INTO students(name, college) VALUES($1, $2)',
      [name, college]
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data saved successfully!' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error saving data' })
    };
  }
};
