/*
  Property Attributes P3

*/

let person = { name: 'Joe' }

let ObjectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(ObjectBase, 'toString')

// (***)
Object.defineProperty(person, 'name', {
  writable: false, // make the property name un-editable
})

// (***)
person.name = 'Nick'
console.log(person) // {name: 'Joe'}
