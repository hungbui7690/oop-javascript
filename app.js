/*
  FUNCTION ARE OBJECTS

*/

function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

// functions are object > have properties & methods
console.log(Circle.name)
console.log(Circle.length)

/////////////////////////////////////////////////////

// constructor
console.log(Circle.constructor)
// behind the scene
const CircleX = new Function(
  'radius',
  `
  this.radius = radius
    this.draw = function () {
      console.log('draw')
    }
  `
)
const circleX = new CircleX(1) // we can create object from this function
console.log(circleX)
