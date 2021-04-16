module.exports = function(app) {
 
    const users = require('../controller/user.controller.js');
 
    // Add user
    app.post('/api/user/add', users.create);
 
    // Fetch users
    app.get('/api/user/fetchAll', users.findAll);

    //Fetch by id
    app.get("/api/user/:id", users.findOne);

    //Update by ID
    app.put("/api/user/:id", users.update);

    //Delete by ID
    app.delete("/api/user/:id",users.delete);

    //Delete all
    app.delete("/api/user",users.deleteAll)
}