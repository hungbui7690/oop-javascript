/*
  Inheritance P1

*/

class Shape {
  move() {
    console.log('move')
  }
}

/////////////////////////////

// (***) we use "extends" keyword
class Circle extends Shape {
  draw() {
    console.log('draw')
  }
}

/////////////////////////////

const circle = new Circle()
console.log(circle) // check this to see the structure
circle.draw()
circle.move()
