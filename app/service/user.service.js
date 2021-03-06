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
	}).then(user=>{
		res.send("User added");
	})
}; 



  //Delete All
  exports.deleteAll = (req, res) => {
	User.destroy({
	  where: {},
	  truncate: false
	})
	  .then(nums => {
		res.send(`${nums} User(s)  deleted successfully!`);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while removing all users."
		});
	  });
  };


//Fetch one by ID
exports.findOne = (req, res) => {
	const id = req.params.id;
  
	User.findByPk(id)
	  .then(result => {
          if(!result)
          {
              res.send("No user found with that id");
          }
          else
		    res.send(result);
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error retrieving User with id=" + id
		});
	  });
  };

  //Delete one by ID
exports.delete = (req, res) => {
	const id = req.params.id;
  
	User.destroy({
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "User was deleted successfully!"
		  });
		} else {
		  res.send({
			message: `User with id=${id} was not found!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Could not delete Tutorial with id=" + id
		});
	  });
  };

  //Delete All
  exports.deleteAll = (req, res) => {
	User.destroy({
	  where: {},
	  truncate: false
	})
	  .then(nums => {
		res.send({ message: `${nums} User(s)  deleted successfully!` });
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while removing all users."
		});
	  });
  };

  //Fetch one by ID
exports.findOneUser = (req, res) => {
	const id = req.params.id;
  
	User.findByPk(id)
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error retrieving User with id=" + id
		});
	  });
  };


  //Update by ID
exports.updateUser = (req, res) => {
	const id = req.params.id;
  
	User.update(req.body, {
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "User was updated successfully."
		  });
		} else {
		  res.send({
			message: `User with id=${id} was not found`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error updating User with id=" + id
		});
	  });
  };

// Fetch all Companies include Products
exports.findAllUsers = (req, res) => {
	User.findAll({
		attributes: [['id', 'userId'], 'name', 'city', 'phone']
	}).then(users => {
	   res.send(users);
	});
};