/*
  Static Methods P1
  - not tied to any object, but tied to the class


*/

class Circle {
  constructor(radius) {
    this.radius = radius

    this.move = function () {
      console.log('move')
    }
  }

  draw() {
    console.log('draw')
  }

  // (***)
  static parse() {
    console.log('parse')
  }
}

const circle = new Circle(10)
console.log(circle) // (***) if we check, we don't see parse() in the instance

Circle.parse() // (***)
