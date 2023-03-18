/*
  Private Properties using WeakMap P1
  + Method 3: WeakMap()
    - technically, we still can access to this private property if we have access to WeakMap 
    - this can be solve easily when we use modules to prevent access later
*/

const _radius = new WeakMap() // (***)

class Circle {
  constructor(radius) {
    _radius.set(this, radius) // (***)
  }
}

const circle = new Circle(10)
circle._radius = 99 // create new property

console.log(circle)
