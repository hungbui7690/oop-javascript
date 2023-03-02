/*
  ENUMERATING PROPERTIES
  - Iterating means repeating some steps > similar to looping
  - enumerating means going through all values in a collection of values
  - loop is a sequence of instruction s that is continually repeated until a certain condition is reached

*/

function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}
const circle = new Circle(10)

// Enumerating
// typeof key = string/number, typeof circle[key] = number/function
for (let key in circle) {
  console.log(key, circle[key], typeof circle[key])
}

// Convert keys to array
const keys = Object.keys(circle)
console.log(keys)

// Convert keys to array
const values = Object.values(circle)
console.log(values)

// Array of arrays
const entries = Object.entries(circle)
console.log(entries)

// check if key exists in object or not
if ('radius' in circle) console.log('Circle has a radius')
