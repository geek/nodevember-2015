'use strict'

const GoogleDistance = require('google-distance')


const arrivalTime = function (origin, callback) {
  GoogleDistance.get({
    origin: origin,
    destination: '112 19th Ave S, Nashville, TN 37203'
  }, (err, result) => {

    if (err) {
      return callback(err)
    }

    callback(null, Date.now() + (result.durationValue * 1000))
  })
}


arrivalTime('Kansas City, MO', (err, time) => {
  console.log(err || new Date(time))
})
