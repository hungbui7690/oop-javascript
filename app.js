/*
  Exercise P1
  - create HtmlElement class (parent)
    + click in HtmlElement
    + focus in HtmlElement.prototype

  - create HtmlSelectElement (child of HtmlElement)  
    + These both functions will be in HtmlSelectElement
      > addItem()
      > removeItem()

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

// (***) with this implementation, we don't see click() in HtmlSelectElement
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype)
HtmlSelectElement.prototype.constructor = HtmlSelectElement

//////////////////////////////////

const element = new HtmlElement()
const selectElement = new HtmlSelectElement()

selectElement.add('1')
selectElement.add('2')
selectElement.add('3')
selectElement.remove('2')

console.log(selectElement)
