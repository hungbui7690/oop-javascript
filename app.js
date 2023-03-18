/*
  Static Methods P3
  
*/

class Math2 {
  constructor(value) {
    this.value = value
  }

  // (***)
  static double(value) {
    return value * 2
  }
}

// (***)
console.log(Math2.double(4))
