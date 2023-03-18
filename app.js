/*
  Private Properties using WeakMap P3
  + Method 3: WeakMap()

*/

const _radius = new WeakMap()

const _move = new WeakMap() // (***) private method

class Circle {
  constructor(radius) {
    _radius.set(this, radius)

    // (***) need to be in constructor function
    _move.set(this, function () {
      console.log('move', this)
    })
  }

  log() {
    _move.get(this)() // (***)
    console.log(_radius.get(this)) // undefined since class is run in strict mode
  }
}

const circle = new Circle(10)
console.log(circle)

circle.log() // (***)
