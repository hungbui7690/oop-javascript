/*
  Constructor Prototypes P4
  
*/

function Circle(radius) {
  this.radius = radius
}

const circle = new Circle(10)
console.log(circle) // (***)

console.log(Circle.prototype) // (***) this is the same as prototype of "circle" object
