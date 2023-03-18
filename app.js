/*
  Mixins P3

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

function Person() {}

Object.assign(Person.prototype, eat, walk)

const person = new Person()
console.log(person)

///////////////////////////////////

// (***)
const swim = {
  swim: function () {
    console.log('Swimming')
  },
}

function GoldFish() {}

Object.assign(GoldFish.prototype, eat, swim)

const goldFish = new GoldFish()
console.log(goldFish)
