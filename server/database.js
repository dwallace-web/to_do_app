//configure database connection
//used to run queries
const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: process.env.dbpassword,
    database: "perntasks",
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};