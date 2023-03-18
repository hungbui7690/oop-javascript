/*
  Prototype vs Instance Members P1
  
*/

// Circle has 2 members
function Circle(radius) {
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }
}

// (***) when we check, we will see each object has draw() method > if we have 1000 copies object, we will have 1000 copies of draw() method > next lesson
const circle1 = new Circle(10)
const circle2 = new Circle(20)
