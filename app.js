/*
  Intermediate Function Inheritance P2
  - the extend() is called Intermediate Function   
*/

// (***) put into a function to reduce noisy
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

///////////////////////////////////////////

function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

////////////////////////////////////////////

function Circle(radius, color) {
  Shape.call(this, color)

  this.radius = radius
}

// (***)
extend(Circle, Shape)

Circle.prototype.draw = function () {
  console.log('draw')
}

////////////////////////////////////////////

function Square(size) {
  this.size = size
}

// (***)
extend(Square, Shape)

const square = new Square(99)
console.log(square)
square.duplicate()
