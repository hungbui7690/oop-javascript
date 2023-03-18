/*
  Private Properties using Symbol P2
  - there are 3 approaches to make the property become private
    + Method 1: use _
      > super terrible

*/

class Circle {
  constructor(radius) {
    this._radius = radius // (***)
    // this['_radius'] = radius // 2nd way to access property
  }

  draw() {
    console.log(this)
  }
}

const circle = new Circle(10)
circle._radius = 100 // though we use _, we still can access it outside > because it is just convention between developers > it does not prevent dev to change the property
console.log(circle)
