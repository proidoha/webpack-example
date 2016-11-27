// var _ = require('underscore');
"use strict";
// import '.main.css';
// require("./src/css/main.css");

var _  =  require('underscore');


let content = require("./content");
console.log('Hello webpack');
var a = 0;
a++;
// console.log(a++);

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




