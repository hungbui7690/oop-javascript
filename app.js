/*
  FUNCTION ARE OBJECTS

*/

function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

// alternative way to create an instance
const circleA = {}
Circle.call(circleA, 2)
console.log(circleA)

const another = new Circle(2)
console.log(another)

///////////////////////////////

// without new keyword > it will look like this > check window object, we will see draw() & radius=2
const circleB = Circle.call(window, 2)

///////////////////////////////

// call() vs apply
Circle.call({}, 1)
Circle.apply({}, [1, 2, 3])
