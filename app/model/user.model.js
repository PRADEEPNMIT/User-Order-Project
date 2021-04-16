module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  name: {
		  type: Sequelize.STRING
	  },
	  city: {
		  type: Sequelize.STRING
	  },
	  phone: {
		  type: Sequelize.STRING
	  }
	});
	return User;
}