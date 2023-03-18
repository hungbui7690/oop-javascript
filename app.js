/*
  Private Properties using Symbol P3
  + Method 2: use Symbol()


*/

class Circle {
  constructor(radius) {
    this._radius = radius
  }

  draw() {
    console.log(this)
  }
}

const circle = new Circle(10)
console.log(circle)

// (***)
console.log(Symbol() === Symbol()) // false
