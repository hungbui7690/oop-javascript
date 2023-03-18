/*
  Method Overriding P1
  - sometimes, the duplicate() of the parent does not work with its children
    > we need to override it

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

// (***) this need to be place after extend() > this works because JS will use "lookup" when we call the function
Square.prototype.duplicate = function () {
  console.log('Square duplication')
}

const square = new Square(99)
console.log(square)
square.duplicate()
