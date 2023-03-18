/*
  Calling the Super Constructor P2

*/

function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

////////////////////////////////////////////

// (***) we need to add "color" property to Circle() as well
function Circle(radius, color) {
  Shape(color)

  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
  console.log('draw')
}

// (***) though we do this, we still don't see "red" > reason: because we use new keyword, it creates the {}, then point this keyword to Circle, but not for Shape: this of Shape will point to window object > we can verify: window.color
const c1 = new Circle(10, 'red')
console.log(c1)
console.log(window.color) // red
