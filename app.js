/*
  Private Properties using WeakMap P1
  + Method 3: WeakMap()

*/

// (***)
const _radius = new WeakMap()

class Circle {
  constructor(radius) {
    this[_radius] = radius
  }
}

const circle = new Circle(10)
circle._radius++ // with this, we create a new property
console.log(circle)
