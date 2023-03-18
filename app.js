/*
  Polymorphism P3
  - 
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

Square.prototype.duplicate = function () {
  console.log('Square duplication')
}

/////////////////////////////////////////////
// If we don't use OOP, it will look like this
/////////////////////////////////////////////
const shapes = [new Circle(), new Square()]

for (let s of shapes) {
  if (s.type === 'circle') duplicateCircle()
  if (s.type === 'square') duplicateSquare()
}
