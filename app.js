/*
  Constructor Prototypes P1
  - 3 ways to get the prototype of an object:   
    + Object.getPrototypeOf(person)
    + person.__proto__
    + Person.constructor
*/

function Circle(radius) {
  this.radius = radius
}

const circle = new Circle(10)

// 3 lines below return same result
console.log(Object.getPrototypeOf(circle))
console.log(circle.__proto__)
console.log(Circle.prototype)
