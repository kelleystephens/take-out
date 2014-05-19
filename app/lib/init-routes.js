'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var users = traceur.require(__dirname + '/../routes/users.js');
  var foods = traceur.require(__dirname + '/../routes/foods.js');

  app.get('/', dbg, home.index);
  app.post('/login', dbg, users.login);
  app.put('/order/:userId', dbg, users.order);

  app.post('/addfood/:userId', dbg, foods.addfood);


  console.log('Routes Loaded');
  fn();
}
