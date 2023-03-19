/*
  Method Overriding P2

*/

class Shape {
  constructor(color) {
    this.color = color
  }

  move() {
    console.log('Shape Moves')
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

  move() {
    super.move() // (***) call move() from parent
    console.log('Circle Moves')
  }
}

const circle = new Circle(10, 'red')
console.log(circle)
circle.move()
