/*
  VALUES VS REFERENCE TYPE
  - Primitives are copied by their "values" 
  - Objects are copied by their "reference"
*/

// PRIMITIVES
let x = 10
let y = x // 2 independent variables
x = 20
console.log(x, y)

// REFERENCE TYPES > memory store location > actual data stores in heap
let a = { value: 10 }
let b = a
b.value = 20
console.log(a, b)
