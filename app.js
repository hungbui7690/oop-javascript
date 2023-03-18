/*
  "this" keyword P2
  
*/

const Circle = function (radius) {
  this.radius = radius

  this.draw = function () {
    console.log(this)
  }
}

const circle = new Circle(10)
circle.draw() // method call

// (***)
const draw = circle.draw
draw() // function call > window object
