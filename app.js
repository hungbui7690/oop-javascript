/*
  Inheritance P2

*/

class Shape {
  // (***) we add property to parent class
  constructor(color) {
    this.color = color
  }

  move() {
    console.log('move')
  }
}

class Circle extends Shape {
  // (***)
  constructor(radius, color) {
    super(color) // (***) must call super()

    this.radius = radius
  }

  draw() {
    console.log('draw')
  }
}

const circle = new Circle(10, 'red')
console.log(circle)
circle.draw()
circle.move()
