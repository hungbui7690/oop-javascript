/*
  Multi-Level Inheritance

*/

let myArr = []
console.log(myArr) // myArr > Array Object > Object Base

function Circle(radius) {
  this.radius = radius

  this.draw = function () {
    console.log('draw')
  }
}

// (***) objects that are created by a give constructor will have the same prototype
const circle1 = new Circle(10)
const circle2 = new Circle(5)

console.log(circle1)
console.log(circle2)
