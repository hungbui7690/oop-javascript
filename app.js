/*
  FACTORY FUNCTIONS

*/

// Object Literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log('draw')
  },
}

/////////////////////////////////
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
circleX.draw()
