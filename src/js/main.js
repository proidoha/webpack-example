"use strict";


let content = require("./content");
console.log('Hello webpack');

// console.log(content);
// console.log(require('./content'));

let odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });

let obj = {
  field: 111,
  someFn() {
    console.log('someFn');
  }
};

 console.log(odds);


 obj.someFn();

// Использование jquery

// console.log($);

$(function() {
 $('.content').append(" <br /> Новая строка!");
});




