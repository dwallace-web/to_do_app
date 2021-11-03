//configure database connection
//used to run queries
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: process.env.dbpassword,
    port: 4000,
    database: 'pernapptodos',
})

module.exports = pool;