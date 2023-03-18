/*
  Property Attributes P2

*/

let person = { name: 'Joe' }

// (***) get prototype of person object
let ObjectBase = Object.getPrototypeOf(person)

// (***) see the descriptor of person object
let descriptor = Object.getOwnPropertyDescriptor(ObjectBase, 'toString')
console.log(descriptor)
