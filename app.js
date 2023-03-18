/*
  Hoisting & Class Expression
  - class is NOT HOISTED > if we create object b4 class definition > err

  
  (***) class expression is never used in the real world
*/

const circle = new Circle(10)
console.log(circle)

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
}

// (***) class expression
const Square = class {}
