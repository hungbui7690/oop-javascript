/*
  Resetting the Constructor P3

*/

function Shape() {}
Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

function Circle(radius) {
  this.radius = radius
}

// (***) uncomment
Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function () {
  console.log('draw')
}

// (***) after uncommenting the inheritance line, we don't see the Circle constructor function, but we see the Shape constructor function
const c1 = new Circle(10)
console.log(c1)

const c2 = new Circle.prototype.constructor(10) // if we use this > if will create a new Shape object
console.log(c2)
