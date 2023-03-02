/*
  Exercise:
  - Design a Stopwatch which has:
    + duration = 0
    + start(), stop(), reset() 

*/

function StopWatch() {
  this.duration = 0

  this.start = function () {}

  this.stop = function () {}

  this.reset = function () {}
}

const sw = new StopWatch()
sw.start()
sw.stop()
sw.duration // 23.732

sw.reset()
sw.duration // 0
