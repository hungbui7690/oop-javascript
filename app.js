/*
  Getters & Setters P1
  -

*/

const _radius = new WeakMap()

class Circle {
  constructor(radius) {
    _radius: _radius.set(this, radius) // (***)
  }

  getRadius() {
    return _radius.get(this) // (***) earlier, we use Object.defineProperty() > but we should not use that we > since it pollutes our code
  }
}

const circle = new Circle(10)

// (***)
console.log(circle.getRadius())
