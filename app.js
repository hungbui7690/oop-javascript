/*
  Prototype vs Instance Members P6
  
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

// (***) if we use Object.keys() > it does not show move() in prototype
console.log(Object.keys(circle)) // ['radius', 'draw']

// (***) for-in will show the method in prototype > show instance + prototype members
for (const key in circle) {
  console.log(key)
}
