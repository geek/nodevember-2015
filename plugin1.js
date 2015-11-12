'use strict'

const Joi = require('joi')


module.exports = function (server, options, next) {
  server.route({
    method: 'get',
    path: '/{time}',
    config: {
        validate: {
        params: {
          time: Joi.date()
        }
      },
      handler: (request, reply) => {
        var hours = request.params.time.getHours()

        reply(hours >= 11 && hours < 22)
      }
    }
  })

  next()
}


module.exports.attributes = {
  name: 'isOpen',
  version: '1.0.0'
}
