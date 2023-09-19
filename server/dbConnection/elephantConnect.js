const { Pool } = require('pg');

const DB_CONNECTION = 'postgres://znmwineo:OjLl2Jb3GOCuEiybZdsTC71JMWRYQuv-@batyr.db.elephantsql.com/znmwineo';

const pool = new Pool({
    connectionString: DB_CONNECTION
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}