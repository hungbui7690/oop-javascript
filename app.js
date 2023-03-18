/*
  Intermediate Function Inheritance P1

*/

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

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
  console.log('draw')
}

////////////////////////////////////////////

// (***)
function Square(size) {
  this.size = size
}

// (***) we can see that every time we use inheritance, we need to use these 2 lines > code becomes so noisy
Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square // reset constructor

// (***)
const square = new Square(99)
console.log(square)
square.duplicate()
