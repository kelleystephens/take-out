'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Order Food'});
};
