/*
  Property Attributes P5

*/

let person = { name: 'Joe' }

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: true, // (***) make this property deletable
})

delete person.name // delete property
console.log(person) // {}
