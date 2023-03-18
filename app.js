/*
  Create Your Own Prototypical Inheritance P2
  - below: we have this:
    + Object Base > Shape Base > s 
    + Object Base > Circle Base > c

  - we want to implement this: 
    + Object Base > Shape Base > Circle Base > c 
      > we will use Prototypical Inheritance > next lecture

*/

// (***)
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

const s = new Shape()

// (***)
function Circle(radius) {
  this.radius = radius
}

Circle.prototype.draw = function () {
  console.log('draw')
}
const c = new Circle(10)
