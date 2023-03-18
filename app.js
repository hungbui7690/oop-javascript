/*
  Mixins P4
  - to make the code less noisy > use Mixins

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

const swim = {
  swim: function () {
    console.log('Swimming')
  },
}

/////////////////////////////////////

// (***)
function mixin(target, ...sources) {
  Object.assign(target, ...sources)
}

function Person() {}
mixin(Person.prototype, eat, walk)

function Fish() {}
mixin(Fish.prototype, eat, swim)

const person = new Person()
const fish = new Fish()
console.log(person, fish)
