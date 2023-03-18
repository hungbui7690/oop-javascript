/*
  Prototypal Inheritance P1

*/

let x = {}
console.log(x) // we can see x extends Object Base
console.log(x.toString()) // [object Object]

let y = {} // we also can see that y extends Object Base

console.log(Object.getPrototypeOf(x)) // this is the same with what inside Object Prototype of x
