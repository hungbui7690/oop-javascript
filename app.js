/*
  Prototype vs Instance Members P7
  
*/

function Circle(radius) {
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }
}

Circle.prototype.move = function () {
  console.log('move')
}

const circle = new Circle(10)
circle.move()

// (***) hasOwnProperty() return instance members > that's why in some document: instance property === own property
console.log(circle.hasOwnProperty('radius')) // true
console.log(circle.hasOwnProperty('draw')) // true
console.log(circle.hasOwnProperty('move')) // false
