/*
  Property Attributes P1

*/

let person = { name: 'Joe' }
console.log(person)
console.log(person.toString()) // [object Object]

for (const key in person) {
  console.log(key) // name
}

const keys = Object.keys(person)
console.log(keys) // ['name']
