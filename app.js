/*
  PRIVATE PROPERTIES & METHODS
  
*/

function Circle(radius) {
  // this is not a property of this object, it just a local variable of this function > though we cannot access this variable outside of this object
  let color = 'red'

  this.radius = radius

  // this also a local function to this function
  let computeLocation = function () {
    console.log('compute location')
  }

  this.draw = function () {
    console.log(color)
    computeLocation()
    console.log('draw')
  }
}
const circle = new Circle(10)

// we cannot call computeLocation() & get color property here since they are scoped to Circle function only
circle.draw()
