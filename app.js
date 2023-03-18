/*
  "this" keyword P4
  
*/

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  draw() {
    console.log(this)
  }
}

const circle = new Circle(10)

// (***) with ES6, we don't need to use strict mode > auto for us
const draw = circle.draw
draw()
