/*
  When to Use Inheritance P2
  - avoid creating inheritance hierarchies
  - favor composition over inheritance > next lecture

*/

// (***) we need to remove walk() from Animal
function Animal() {
  this.eat = function () {}
}

/////////////////////////////////////

// (***) and use walk here
function Mammal() {
  this.walk = function () {}
}

// extend Mammal
function Person() {}
function Dog() {}

//////////////////////////////////////

// (***) we can see that when we add a new thing, we need to change the hierarchy
function GoldFish() {
  this.swim = function () {}
}
