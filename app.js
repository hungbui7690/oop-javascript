/*
  Constructor Prototypes P3
  
*/

function Circle(radius) {
  this.radius = radius
}

const circle = new Circle(10)

// (***)
const arr = []

// (***)
console.log(arr.__proto__)
console.log(Object.getPrototypeOf(arr))

// (***)
console.log(Object.getPrototypeOf(Array))
console.log(Array.constructor)
