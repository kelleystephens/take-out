'use strict';

var traceur = require('traceur');
var Food = traceur.require(__dirname + '/../models/food.js');

exports.addfood = (req, res)=>{
  var qty = req.body.qty;
  var name = req.body.name;
  name = name.toLowerCase();
  Food.findfood(name, food=>res.render('users/added', {food:food, qty:qty}));
};
