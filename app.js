/*
  Calling the Super Constructor P3

*/

function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

////////////////////////////////////////////

function Circle(radius, color) {
  Shape.call(this, color) // (***) after this, everything will be ok

  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
  console.log('draw')
}

const c1 = new Circle(10, 'red')
console.log(c1)
