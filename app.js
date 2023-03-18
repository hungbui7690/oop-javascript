/*
  Prototypal Inheritance P2

*/

let x = {}

let y = {}

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)) // true > both x & y extends the same Object Base

console.log(x.__proto__ === y.__proto__) // true > don't use this > deprecated
