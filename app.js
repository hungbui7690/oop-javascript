/*
  Prototype vs Instance Members P2
  
*/

function Circle(radius) {
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }
}

// (***) to solve the problem in previous lecture, we need to use prototype
Circle.prototype.move = function () {
  console.log('move')
}

// (***) check prototype of this object > we will see move()
const circle = new Circle(10)
console.log(circle)

// (***)
console.log(Circle.prototype === circle.__proto__) // true
