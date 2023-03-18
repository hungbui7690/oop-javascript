/*
  Polymorphism P1
  - we can see the duplicate() has many forms > why do we need this?? > next lesson
*/

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

///////////////////////////////////////////

function Shape(color) {
  this.color = color
}

// (***)
Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

////////////////////////////////////////////

function Circle(radius, color) {
  Shape.call(this, color)

  this.radius = radius
}

extend(Circle, Shape)

// (***)
Circle.prototype.duplicate = function () {
  console.log('Circle duplication')
}

Circle.prototype.draw = function () {
  console.log('draw')
}

////////////////////////////////////////////

function Square(size) {
  this.size = size
}

extend(Square, Shape)

// (***)
Square.prototype.duplicate = function () {
  console.log('Square duplication')
}

const square = new Square(99)
console.log(square)
square.duplicate()
