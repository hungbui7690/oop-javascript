/*
  VALUES VS REFERENCE TYPE
  - Primitives are copied by their "values" 
  - Objects are copied by their "reference"
*/

let number = 10

function increase(number) {
  number++
}

increase(number)
console.log(number)

////////////////////////////

let object = { value: 10 }

function increase(obj) {
  obj.value++
}

increase(object)
console.log(object)
