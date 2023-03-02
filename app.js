/*
  GETTERS/SETTERS
*/

function Circle(radius) {
  let color = 'red'
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }

  // this is the correct way to define getter/setter
  Object.defineProperty(this, 'color', {
    get: function () {
      return color
    },
  })
}
const circle = new Circle(10)

// get the property
console.log(circle.color)

circle.color = 'green'
console.log(circle.color) // change is not applied > still 'red'
