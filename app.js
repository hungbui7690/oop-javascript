/*
  Private Properties using WeakMap P5
  + Method 3: WeakMap()

*/

// (***) we can also use only 1 WeakMap
const privateProps = new WeakMap()

class Circle {
  constructor(radius) {
    // (***)
    privateProps.set(this, {
      radius,
      move: () => {
        console.log('move', this)
      },
    })
  }

  log() {
    privateProps.get(this).move() // (***)
    console.log(privateProps.get(this).radius) // (***)
  }
}

const circle = new Circle(10)
console.log(circle)

circle.log()
