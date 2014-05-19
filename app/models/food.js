'use strict';

var food = global.nss.db.collection('food');


class Food{

  static findfood(name, fn){
    food.findOne({name:name}, (e, food)=>{
      fn(food);
    });
  }

}

module.exports = Food;
