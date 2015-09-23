var express = require('express');

var fs = require('fs');

var router = express.Router();

var todoItems = [
	{ id: 1, desc: 'foo'},
	{ id: 2, desc: 'bar'},
	{ id: 3, desc: 'baz'}
];
// Get content from file
 var contents = fs.readFileSync("data/py14_990_1.json");

// Define to JSON type
 var jsonContent = JSON.parse(contents);


router.get('/', function(req, res) {
	//res.send('hello, express!');
	res.render('index', {
		title: 'My App',
		items: todoItems,
		org: jsonContent
	});
});

router.post('/add', function(req, res) {
	var newItem = req.body.newItem;

	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});

	res.redirect('/');
});

module.exports = router;