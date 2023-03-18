/*
  Exercise:
  - move start(), stop(), reset() to prototype

  (***) when working with objects that have the same type > we should move function to prototype > otherwise, don't use this as the optimal technique > put these methods in the prototype will lead to some issue (learn later)
*/

function StopWatch() {
  let startTime,
    endTime,
    running = false,
    duration = 0

  this.start = function () {
    if (running) throw new Error('Stopwatch has already started')

    running = true
    startTime = new Date()
  }

  this.stop = function () {
    if (!running) throw new Error('Stopwatch has already stopped')

    running = false
    endTime = new Date()
    duration = (endTime - startTime) / 1000
  }

  this.reset = function () {
    duration = 0
    startTime = null
    endTime = null
    running = false
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
  })
}

const sw = new StopWatch()
