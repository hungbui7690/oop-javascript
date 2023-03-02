/*
  Constructor Function

*/

// Factories
function createCircle(radius) {
  return {
    radius: 1,
    draw: function () {
      console.log('draw')
    },
  }
}
const circleX = createCircle(1)

/////////////////////////////////

// Constructor: this + no "return" + use "new"
function CircleY(radius) {
  console.log(this)
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

// this = CircleY {}
const circleY = new CircleY(1)

// global "this" = Window
console.log('=> Global "this"', this)

// Window
const circleZ = CircleY(1) // without new keyword > this = global object > radius & draw() will be added to window object
