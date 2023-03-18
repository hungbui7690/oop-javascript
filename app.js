/*
  Private Properties using Symbol P5
  + Method 2: use Symbol()


*/

const _radius = Symbol()

class Circle {
  constructor(radius) {
    this[_radius] = radius
  }

  draw() {
    this[_radius]++
    console.log(this[_radius])
  }
}

const circle = new Circle(10)

// (***) this is the hack to access it
console.log(Object.getOwnPropertySymbols(circle))

const key = Object.getOwnPropertySymbols(circle)[0]
const radius = circle[key]
console.log(radius) // though we can get the value > we cannot change it
// radius++ // err
console.log(circle)
