/*
  Method Overriding P2

*/

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

extend(Circle, Shape)

Circle.prototype.draw = function () {
  console.log('draw')
}

////////////////////////////////////////////

function Square(size) {
  this.size = size
}

extend(Square, Shape)

Square.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this) // (***) call duplicate() from parent
  console.log('Square duplication')
}

const square = new Square(99)
console.log(square)
square.duplicate()
