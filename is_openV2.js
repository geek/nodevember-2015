'use strict'

const Joi = require('joi')


module.exports = function (server, options, next) {

  server.dependency('chairo')

  server.seneca.add({ role: 'isOpen' }, isOpen).listen(8000)

  next()
}


module.exports.attributes = {
  name: 'isOpen',
  version: '2.0.0'
}


const isOpen = function (message, callback) {
  var hours = new Date(message.time).getHours()

  callback(null, { isOpen: hours >= 11 && hours < 22 })
}
