/*
  Exercise
  - create a Stack class which has these: 
    + push()
    + pop()  > throw error when Stack is empty
    + count()
    + peek()  > throw error when Stack is empty


  (***) use WeakMap() to make the list of items in the stack private
*/

const _items = new WeakMap()

class Stack {
  constructor() {
    _items.set(this, [])
  }

  push(value) {
    _items.get(this).push(value)
  }

  pop() {
    if (_items.get(this).length === 0) throw new Error('Stack is empty')
    return _items.get(this).pop()
  }

  peek() {
    if (_items.get(this).length === 0) throw new Error('Stack is empty')

    const items = _items.get(this)
    return items[items.length - 1]
  }

  getCount() {
    return _items.get(this).length
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop()) // 4
console.log(stack.pop()) // 3
console.log(stack.peek()) // 2
console.log(stack.pop()) // 2
console.log(stack.pop()) // 1
// stack.pop() // error
// stack.peek() // error
