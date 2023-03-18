/*
  Exercise #2 P2
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

/////////////////////////////////////

function HtmlSelectElement(items = []) {
  this.items = items

  this.add = function (item) {
    this.items.push(item)
  }

  this.remove = function (item) {
    return this.items.splice(this.items.indexOf(item), 1)
  }

  // (***)
  this.render = function () {
    return `
      <select>
        ${this.items
          .map((item) => {
            return `<option>${item}</option>`
          })
          .join('')}
      </select>
    `
  }
}

HtmlSelectElement.prototype = Object.create(new HtmlElement())
HtmlSelectElement.prototype.constructor = HtmlSelectElement

//////////////////////////////////

// (***)
function HtmlImageElement(src) {
  this.src = src

  this.render = function () {
    return `<img src="${this.src}" />`
  }
}

// (***)
HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

//////////////////////////////////

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('http://'),
]

for (let e of elements) {
  console.log(e.render())
}
