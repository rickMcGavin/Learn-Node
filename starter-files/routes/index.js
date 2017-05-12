const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	const wes = { name: 'Wes', age: 100, cool: true };
	res.json(req.query);
  // res.send('Hey! It works!');
  // res.json(wes);
});

router.get('/reverse/:name', (req, res) => {
	const reverse = [...req.params.name].reverse().join('');
	res.send(reverse);
});

module.exports = router;
