/*
  Constructor Prototypes P2
  
*/

function Circle(radius) {
  this.radius = radius
}

const circle = new Circle(10)

// (***) object literal
const obj1 = {} // under the hood, it will use new Object()
const obj2 = new Object()
console.log(obj1, obj2)

// (***) same
console.log(Object.getPrototypeOf(Object))
console.log(Object.constructor)
