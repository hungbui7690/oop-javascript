/*
  Create Your Own Prototypical Inheritance P3
  - implement: Object Base > Shape Base > Circle Base > c 
  
  - Before, we need to do these 2 steps, now we just need to do 1 step
    > Circle.prototype = Object.create(Object.prototype) // this will be done implicitly
    > Circle.prototype = Object.create(Shape.prototype)

*/

function Shape() {}
Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

//////////////////////////////////////

function Circle(radius) {
  this.radius = radius
}

// (***)
Circle.prototype = Object.create(Shape.prototype)

// (***) this must be placed below inheritance step
Circle.prototype.draw = function () {
  console.log('draw')
}

const c = new Circle(10)
console.log(c) // we will see the object tree that we want
c.duplicate() // now, we can access duplicate()
c.draw()
