/*
  "this" keyword P3
  
*/

// (***) strict mode > change the behavior of "this" keyword
'use strict'

const Circle = function (radius) {
  this.radius = radius

  this.draw = function () {
    console.log(this)
  }
}
const circle = new Circle(10)

const draw = circle.draw
draw() // (***) undefined (because JS engine does not want us to accidentally modify the global object) > without strict mode > return window object
