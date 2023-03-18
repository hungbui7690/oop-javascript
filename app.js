/*
  Private Properties using Symbol P4
  + Method 2: use Symbol()


*/

const _radius = Symbol()

class Circle {
  constructor(radius) {
    this[_radius] = radius
    // this._radius = radius // (***)  don't use this, otherwise, we still can change the original _radius
  }

  draw() {
    console.log(this)
  }
}

const circle = new Circle(10)
// circle._radius = 10000 // though we change _radius here, we actually did't change the real _radius > when we do this here, we create new _radius property in the class
console.log(circle)

console.log(Object.getOwnPropertyNames(circle)) // []
