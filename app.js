/*
  ADD/REMOVE PROPERTIES

    Why it is useful? 
    > for example, a web app send user object to server > server can add token property on the fly then return that object back right away
    > in C# or Java, if we want to do something like this, we have to implement our class again

*/

function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}
const circle = new Circle(10)

// Add Properties
circle.location = { x: 1 }
circle['offset'] = 100
console.log(circle)

// Delete a Property
delete circle.offset
console.log(circle)
