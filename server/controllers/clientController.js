const db = require('../dbConnection/elephantConnect');

const clientController = {};

clientController.getClients = async(req, res, next) => {
    const queryString = 'SELECT * FROM Client';

    try {
        const reply = await db.query(queryString);
        console.log(reply.rows);
        
    } catch(err) {
        console.log(err)
    }
}

module.exports = clientController;