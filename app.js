/*
  Calling the Super Constructor P1

*/

// (***) add color property
function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

////////////////////////////////////////////

function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
  console.log('draw')
}

// (***) now we create the circle > we don't see the "color" property, but we see only the "radius" property
const c1 = new Circle(10)
console.log(c1)
