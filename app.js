/*
  Method Overriding P1

*/

class Shape {
  constructor(color) {
    this.color = color
  }

  move() {
    console.log('move')
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color)
    this.radius = radius
  }

  draw() {
    console.log('draw')
  }

  // (***)
  move() {
    console.log('Circle Moves')
  }
}

const circle = new Circle(10, 'red')
console.log(circle) // (***) check this
circle.move()
