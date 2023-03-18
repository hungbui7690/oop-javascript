/*
  Create Your Own Prototypical Inheritance P1
  - why

*/

function Circle(radius) {
  this.radius = radius
}

Circle.prototype.draw = function () {
  console.log('draw')
}

Circle.prototype.duplicate = function () {
  console.log('duplicate')
}

// (***)
function Square() {}

// (***) we don't want to do this
Square.prototype.duplicate = function () {}
