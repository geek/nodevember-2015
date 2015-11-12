'use strict'

const GoogleDistance = require('google-distance')


module.exports = function (server, options, next) {
  server.dependency('chairo')
  server.seneca.add({ role: 'arrivalTime' }, arrivalTime)

  server.action('arrivalTime', 'role:arrivalTime', { cache: {
      expiresIn: 1000,
      generateTimeout: 3000,
    },
    generateKey: (message) => {
      return 'arrivalTime-' + message.origin
    }
  })

  next()
}

const arrivalTime = function (message, callback) {
  GoogleDistance.get({
    origin: message.origin,
    destination: '112 19th Ave S, Nashville, TN 37203'
  }, (err, result) => {

    if (err) {
      return callback(err)
    }

    callback(null, { time: Date.now() + (result.durationValue * 1000) })
  })
}

module.exports.attributes = {
  name: 'arrivalTime',
  version: '1.0.0'
}
