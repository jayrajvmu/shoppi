const express = require('express');
const router = express.Router();
const db = require('../../db/mysql');

// View All Rooms

router.post('/', (req, res) => {
    console.log(req.body);
	let room = { name: `${req.body.userName}`, password: ` ${req.body.password}` };
	let sql = 'INSERT INTO user SET ?';
	let query = db.query(sql, room, (err, result, fields) => {
		if (err) {
			throw err;
		}
		res.send("User Added");
	});

});


module.exports = router;