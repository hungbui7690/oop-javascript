/*
  ES6 Classes P2
  
*/

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  // (***)
  draw() {
    console.log('draw')
  }
}

const circle = new Circle(10)
console.log(circle) // (***) we can see that draw() is in prototype
