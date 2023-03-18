/*
  Resetting the Constructor P2

*/

function Shape() {}
Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

function Circle(radius) {
  this.radius = radius
}

// (***) comment this line
// Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function () {
  console.log('draw')
}

const c1 = new Circle(10)
console.log(c1)

// (***) this is similar to the one above
const c2 = new Circle.prototype.constructor(100)
console.log(c2)
