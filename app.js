/*
  Property Attributes P4

*/

let person = { name: 'Joe' }

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false, // (***) cannot iterate
})

// (***) return nothing
for (const key in person) console.log(key)

// (***)
const keys = Object.keys(person)
console.log(keys) // []
