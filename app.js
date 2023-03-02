/*
  Exercise:
  - Design a Stopwatch which has:
    + duration = 0
    + start(), stop(), reset() 

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
