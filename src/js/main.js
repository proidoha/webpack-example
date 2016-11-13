// var _ = require('underscore');
"use strict";
// import '.main.css';
// require("./src/css/main.css");
var _  =  require('underscore');
var content = require("./content");
console.log('Hello webpack');
var a = 0;
a++;
console.log(a++);

console.log(content);
// console.log(require('./content'));

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });

var obj = {
  field: 111,
  someFn() {
    console.log('someFn');
  }
};

 console.log(odds);

 obj.someFn();