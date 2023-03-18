/*
  When to Use Inheritance P1
  - we should use this in large project 
  - don't use inheritance in small project 
    > use composition instead  
*/

// (***) base
function Animal() {
  this.eat = function () {}

  this.walk = function () {}
}

// (***) children extends Animal
function Person() {}

function Dog() {}

// (***) later, we can see that GoldFish does not know how to walk > so, it does not work in this case
function GoldFish() {}
