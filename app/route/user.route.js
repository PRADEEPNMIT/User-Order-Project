module.exports = function(app) {
 
    const users = require('../controller/user.controller.js');
 
    // Add user
    app.post('/api/user/add', users.create);
 
    // Fetch users
    app.get('/api/user/fetchAll', users.findAll);
}