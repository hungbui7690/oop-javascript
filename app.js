/*
  "this" keyword P1
  
*/

const Circle = function (radius) {
  this.radius = radius

  this.draw = function () {
    console.log(this) // "this" points to Circle
  }
}

const circle = new Circle(10)
console.log(circle) // Circle {radius: 10, draw: ƒ}
