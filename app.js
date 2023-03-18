/*
  Private Properties using WeakMap P2
  + Method 3: WeakMap()

*/

const _radius = new WeakMap()

class Circle {
  constructor(radius) {
    _radius.set(this, radius)
  }

  log() {
    console.log(_radius.get(this)) // (***) the only way we can access private property
  }
}

const circle = new Circle(10)
console.log(circle)

circle.log() // (***)
