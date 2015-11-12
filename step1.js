'use strict'

const isOpen = function (time) {
  var hours = new Date(time).getHours()

  return hours >= 11 && hours < 22
}


console.log(isOpen(Date.now()))
console.log(isOpen('Wed Nov 11 2015 11:06:02'))
console.log(isOpen('Wed Nov 11 2015 22:06:02'))
console.log(isOpen('Wed Nov 11 2015 10:06:02'))
