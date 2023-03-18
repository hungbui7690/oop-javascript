/*
  Exercise #2 P1
  - const s = new HtmlSelectElement([1, 2, 3])
  - s.render()
    > <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

  - const img = new HtmlImageElement()
  - img:
    + render() in img 
    + click() in HtmlElement
    + focus() in HtmlElement.prototype
  - img.src = 'http://'
  - img.render
    > <img src='http://'/>

  
  (***) check below to know how to test

*/

function HtmlElement() {
  this.click = function () {
    console.log('click')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('focus')
}

function HtmlSelectElement(items = []) {
  this.items = items

  this.add = function (item) {
    this.items.push(item)
  }

  this.remove = function (item) {
    return this.items.splice(this.items.indexOf(item), 1)
  }
}

HtmlSelectElement.prototype = Object.create(new HtmlElement())
HtmlSelectElement.prototype.constructor = HtmlSelectElement

//////////////////////////////////

// (***)
const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('http://'),
]

for (let e of elements) {
  console.log(e.render())
}
