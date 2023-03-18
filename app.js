/*
  Mixins P1
  - we use mixins to achieve composition

*/

const eat = {
  eat: function () {
    this.hunger++
    console.log('Eating')
  },
}

const walk = {
  walk: function () {
    console.log('Walking')
  },
}

// (***) this is the case when we use normal object
const person = Object.assign({}, eat, walk)
console.log(person)
