/*
  Static Methods P2
  - we use static methods to create utility functions that tied to that class
    > Ex: Math.ceil()

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
  static parse(str) {
    const obj = JSON.parse(str)
    const radius = obj.radius
    return new Circle(radius)
  }
}

// (***) need to have double quotes in property name
console.log(Circle.parse('{"radius": 999}'))
