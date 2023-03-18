/*
  Avoid Extending Built-in Objects
  - we should not modify built-in methods 
    + in below example, we add shuffle() > if in the later version, they add shuffle() > bug
    + another reason, if we modify built-in method (like toString()) > and the framework we are using uses that toString() method in the framework > bug

  (***) don't modify objects that we don't own 
*/

Array.prototype.shuffle = function () {
  console.log('shuffle')
}

const arr = []
console.log(arr.shuffle())
