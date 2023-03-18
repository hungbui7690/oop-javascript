/*
  Private Properties using Symbol P1
  
*/

class Circle {
  // (***) with this implementation, "radius" is public
  constructor(radius) {
    this.radius = radius
  }

  draw() {
    console.log(this)
  }
}

const circle = new Circle(10)
circle.radius = 100 // (***) change radius easily
console.log(circle) // {radius: 100}
