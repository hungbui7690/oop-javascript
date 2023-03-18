/*
  Resetting the Constructor P4

*/

function Shape() {}
Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

function Circle(radius) {
  this.radius = radius
}

// (***) reason is here
Circle.prototype = Object.create(Shape.prototype)

// (***) so that, we have to reset the constructor back to Circle object > then everything will be ok
Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
  console.log('draw')
}

const c1 = new Circle(10)
console.log(c1)

const c2 = new Circle.prototype.constructor(10)
console.log(c2)
