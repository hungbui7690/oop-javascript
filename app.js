/*
  ES6 Classes P1
  
*/

// b4 ES6
function Circle(radius) {
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }
}

const circle = new Circle(10)
console.log(circle)
