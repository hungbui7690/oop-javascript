/*
  Polymorphism P2
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
// HERE
/////////////////////////////////////////////

const shapes = [new Circle(), new Square()]

shapes.forEach((s) => {
  s.duplicate() // this is the power of polymorphism
})
