/*
  Prototype vs Instance Members P4
  
*/

function Circle(radius) {
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }
}

Circle.prototype.move = function () {
  console.log('move')
  this.draw() // (***) access instance member from prototype
}

const circle = new Circle(10)
circle.move() // (***)
