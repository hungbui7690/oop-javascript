/*
  GETTERS/SETTERS
*/

function Circle(radius) {
  let color = 'red'
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }

  Object.defineProperty(this, 'color', {
    get: function () {
      return color
    },

    // Setters
    set: function (value) {
      if (!value) throw new Error('value is empty')

      color = value
    },
  })
}
const circle = new Circle(10)
console.log(circle.color)

// circle.color = '' // error

circle.color = 'green'
console.log(circle.color) // 'green'
