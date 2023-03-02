/*
  ABSTRACTION
  - hide the details
  - show the essentials
*/

// essential = radius + draw()
function Circle(radius) {
  this.radius = radius
  this.defaultLocation = { x: 0, y: 0 }
  this.computeLocation = function () {
    console.log('compute location')
  }

  // draw() call computeLocation()
  this.draw = function () {
    this.computeLocation()
    console.log('draw')
  }
}

const circle = new Circle(10)
circle.draw()
