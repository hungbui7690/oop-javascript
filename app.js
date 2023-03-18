/*
  Mixins P2

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

// (***) Person class
function Person() {}

// (***)
Object.assign(Person.prototype, eat, walk)

// (***)
const person = new Person()
console.log(person)
