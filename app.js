/*
  Exercise #1 P2
  - 
*/

function HtmlElement() {
  this.click = function () {
    console.log('click')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('focus')
}

////////////////////////////////

function HtmlSelectElement(items = []) {
  this.items = items

  this.add = function (item) {
    this.items.push(item)
  }

  this.remove = function (item) {
    return this.items.splice(this.items.indexOf(item), 1)
  }
}

// (***) new HtmlElement() > because click() is in HtmlElement, but not in HtmlElement.prototype
HtmlSelectElement.prototype = Object.create(new HtmlElement())
HtmlSelectElement.prototype.constructor = HtmlSelectElement

//////////////////////////////////

const element = new HtmlElement()
const selectElement = new HtmlSelectElement()

selectElement.add('1')
selectElement.add('2')
selectElement.add('3')
selectElement.remove('2')

// (***)
selectElement.click()
selectElement.focus()
