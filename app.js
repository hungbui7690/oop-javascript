/*
  GETTERS/SETTERS
  
*/

function Circle(radius) {
  let color = 'red'

  this.radius = radius

  // Getter: though this works, but we don't want it as a function
  this.getColor = function () {
    return color
  }

  this.draw = function () {
    console.log('draw')
  }
}
const circle = new Circle(10)

// get property by calling function
const color = circle.getColor()
console.log(color)
