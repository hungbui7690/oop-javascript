/*
  Prototype vs Instance Members P5
  
*/

function Circle(radius) {
  this.radius = radius

  this.draw = function () {
    console.log('draw')
    this.move() // (***) access prototype member from instance member
  }
}

Circle.prototype.move = function () {
  console.log('move')
}

const circle = new Circle(10)
circle.draw() // (***)
