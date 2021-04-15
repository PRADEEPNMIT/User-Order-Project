const { response } = require('express');
const db = require('../config/db.config.js');

const User = db.user;


exports.create = (req, res) => {
	// Validate request
	if (!req.body) {
	  res.status(400).send({
		message: "Content can not be empty!"
	  });
	}
  
	// Create a Customer
	const user = {
	  name: req.body.name,
	  city: req.body.city,
	  phone: req.body.phone
	  //orders [] : req.body.orders
	};
  
	// Save User in the database
	User.create(user, (err, data) => {
	  if (err)
		res.status(500).send({
		  message:
			err.message || "Some error occurred while creating the User."
		});
	  else 
	  {	  
		  res.send("User added");  
		}
	}).then(() => {
		res.send("User added");
		
		console.log("Response status "+res.status)
	})
};


  


// Fetch all Companies include Products
exports.findAll = (req, res) => {
	User.findAll({
		attributes: [['uuid', 'userId'], 'name', 'city', 'phone']
	}).then(users => {
		debugger;
	   res.send(users);
	});
};