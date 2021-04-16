const { response } = require('express');
const db = require('../config/db.config.js');
const userService = require('../service/user.service')

const User = db.user;

//Create a User
exports.createUser = userService.create;

//Delete a User
exports.deleteAUser = userService.delete;

//Delete all users
exports.deleteAllUsers = userService.deleteAll;
  
//Find one user
exports.findOne = userService.findOne;

//Update one user
exports.update = userService.updateUser; 

//Find all users
exports.findAllUsers = userService.findAllUsers;
