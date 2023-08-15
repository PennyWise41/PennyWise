const db = require('../dbConnection/elephantConnect');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const clientController = {};

// clientController.getClients = async(req, res, next) => {
//     const queryString = 'SELECT * FROM Client';

//     try {
//         const reply = await db.query(queryString);
//         console.log(reply.rows);
        
//     } catch(err) {
//         console.log(err)
//     }
// }

clientController.test = async (req, res, next) => {
	try{
		const id = await db.query('SELECT COUNT(*) + 1 as nextID FROM Client');
		console.log(id.rows);
		res.locals.id = id.rows[0].nextid;
		console.log(res.locals.id);
		return next();
	} catch(err) {
		return next(err);
	}

}

clientController.createClient = async (req, res, next) => {
    const { username, password, firstName, lastName } = req.body;
    if (!username || !password || !firstName || !lastName ) {
      res.locals.loggedIn = false;
      return next();
    }

    const hashPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
    try {
      const id = await db.query('SELECT COUNT(*) + 1 as nextid FROM Client');
			const newID = id.rows[0].nextid;
			console.log('got id:', newID);
			console.log(req.body);
      const sqlQuery = 'INSERT INTO Client (id, username, password, fname, lname) VALUES ($1, $2, $3, $4, $5) RETURNING id';
    
      const data = await db.query(sqlQuery, [newID, username, hashPassword, firstName, lastName]);
			console.log(data);
      res.locals._id = data.rows[0].id;
      res.locals.firstName = data.rows[0].fname;
      res.locals.lastname = data.rows[0].lname;
      res.locals.username = data.rows[0].username;
			res.locals.loggedIn = true;
      return next();
    } catch (err) {
      return next({
        log: 'Error occurred in clientController.createClient',
        status: 500,
        message: { err: 'An error occurred in clientController.createClient'}
      });
    }
};



  
  // /**
  // * verifyUser - Obtain username and password from the request body, locate
  // * the appropriate user in the database, and then authenticate the submitted password
  // * against the password stored in the database.
  // */
  // clientController.verifyUser = (req, res, next) => {
  //   // write code here
  //   const { username, password } = req.body;
  //   if (!username || !password) {
  //     res.locals.signedIn = false;
  //     return next();
  //     // return next({
  //     //   log: 'Missing username or password in userController.verifyUser',
  //     //   status: 400,
  //     //   message: { err: 'An error occurred in userController.verifyUser'}
  //     // });
  //   }
  
  //   User.findOne({ username }, (err, user) => {
  //     if (err) {
  //       res.locals.signedIn = false;
  //       return next();
  //       // return next({
  //       //   log: 'Error occurred in userController.verifyUser',
  //       //   status: 500,
  //       //   message: { err: 'An error occurred in userController.verifyUser'}
  //       // });
  //     } else {
  //       bcrypt.compare(password, user.password)
  //         .then((result) => {
  //           if (!result) {
  //             res.locals.signedIn = false;
  //             return next();
  //             // return res.redirect('signup');
  //           } else {
  //             res.locals.signedIn = true;
  //             res.locals.userDetail = user;
  //             res.locals.userId = user.id;
  //             return next();
  //           }
  //         })
  //         .catch((err) => {
  //           res.locals.signedIn = false;
  //           return next();
  //           // return next({
  //           //   log: 'Error occurred in userController.verifyUser',
  //           //   status: 500,
  //           //   message: { err: 'An error occurred in userController.verifyUser'}
  //           // });
  //         });
  //     }
  //   });
  // };





















module.exports = clientController;