/*
  Private Properties using WeakMap P4
  + Method 3: WeakMap()

*/

const _radius = new WeakMap()

const _move = new WeakMap()

class Circle {
  constructor(radius) {
    _radius.set(this, radius)

    // (***) use arrow function to solve this
    _move.set(this, () => {
      console.log('move', this)
    })
  }

  log() {
    _move.get(this)() // (***)
    console.log(_radius.get(this))
  }
}

const circle = new Circle(10)
console.log(circle)

circle.log() // (***)
