/*
  ES6 Classes P3
  
*/

class Circle {
  constructor(radius) {
    this.radius = radius

    // (***) if we want method to be in Circle, but not in prototype > put in constructor
    this.move = function () {
      console.log('move')
    }
  }

  draw() {
    console.log('draw')
  }
}

// (***) with ES6 classes, if we don't have "new" keyword > err (unlike we use ES5 constructor function, add to window object)
const circle = new Circle(10)
console.log(circle)
