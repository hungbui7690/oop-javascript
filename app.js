/*
  Prototype vs Instance Members P3
  
*/

function Circle(radius) {
  this.radius = radius

  // Instance Member
  this.draw = function () {
    console.log('draw')
  }
}

// Prototype Member
Circle.prototype.move = function () {
  console.log('move')
}

const circle = new Circle(10)
console.log(circle)

// (***)
console.log(circle.toString())

// (***) override toString()
Circle.prototype.toString = function () {
  return `This Circle has radius of ${this.radius}`
}
console.log(circle.toString())
