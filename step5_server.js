'use strict'

const Seneca = require('seneca')

const isOpen = function (message, next) {
  var hours = new Date(message.time).getHours()

  next(null, { isOpen: hours >= 11 && hours < 22 })
}

Seneca().add({ role: 'isOpen' }, isOpen).listen()
