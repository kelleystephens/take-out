'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.login = (req, res)=>{
  var date = req.body.date;
  User.login(req.body.username, user=>res.render('users/dashboard', {user:user, date:date}));
};

exports.order = (req, res)=>{
  console.log(req.body);
};
