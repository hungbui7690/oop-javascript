/*
  Solution:
  - similar to this, we need to make those local variables to become read-only property
    > we pollute the interface of our class > since before, we just have 3 functions + 1 property > also validate the idea behind abstraction

*/

function StopWatch() {
  let startTime,
    endTime,
    running = false,
    duration = 0

  // (***) create getter and setter for these properties
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
    set: function (value) {
      duration = value
    },
  })
  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime
    },
    set: function (value) {
      startTime = value
    },
  })
  Object.defineProperty(this, 'endTime', {
    get: function () {
      return endTime
    },
    set: function (value) {
      endTime = value
    },
  })
  Object.defineProperty(this, 'running', {
    get: function () {
      return running
    },
    set: function (value) {
      running = value
    },
  })
}

// (***)
StopWatch.prototype.start = function () {
  if (this.running) throw new Error('Stopwatch has already started')

  this.running = true
  this.startTime = new Date()
}
StopWatch.prototype.stop = function () {
  if (!this.running) throw new Error('Stopwatch has already stopped')

  this.running = false
  this.endTime = new Date()
  this.duration = (this.endTime - this.startTime) / 1000
}
StopWatch.prototype.reset = function () {
  this.duration = 0
  this.startTime = null
  this.endTime = null
  this.running = false
}

const sw = new StopWatch()
