/*
  Private Properties using Symbol P6
  + Method 2: use Symbol()


*/

const _radius = Symbol()

// (***) create private method with Symbol()
const _draw = Symbol()

class Circle {
  constructor(radius) {
    this[_radius] = radius
  }

  // (***)
  [_draw]() {
    console.log(this[_radius])
  }
}

const circle = new Circle(10)
console.log(circle)
// circle._draw() // (***) err
