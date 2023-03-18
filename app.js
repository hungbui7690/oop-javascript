/*
  Resetting the Constructor P1

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

const c = new Circle(10)
console.log(c) // (***) check prototype > we can see constructor()
