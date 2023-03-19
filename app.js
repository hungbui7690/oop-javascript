/*
  Getters & Setters P2

*/

const _radius = new WeakMap()

class Circle {
  constructor(radius) {
    _radius: _radius.set(this, radius)
  }

  getRadius() {
    return _radius.get(this)
  }

  // (***)
  setRadius(value) {
    if (value <= 0) throw new Error('Invalid radius!!!')

    _radius.set(this, value)
  }
}

const circle = new Circle(10)

circle.setRadius(20) // (***)
console.log(circle.getRadius())
