'use strict'

const Boom = require('boom')
const Joi = require('joi')


module.exports = function (server, options, next) {

  server.dependency('isOpen')
  server.dependency('arrivalTime')
  server.route({
    method: 'get',
    path: '/{origin}',
    config: {
        validate: {
        params: {
          origin: Joi.string()
        }
      },
      handler: (request, reply) => {
        request.server.methods.arrivalTime({ origin: request.params.origin}, (err, arrival) => {
          if (err) {
            return reply(Boom.internal(err))
          }

          request.seneca.act({ role: 'isOpen', time: arrival.time}, (err, message) => {
            if (err) {
              return reply(Boom.internal(err))
            }

            reply({
              arrivalTime: new Date(arrival.time),
              isOpen: message.isOpen
            })
          })

        })

      }
    }
  })

  next()
}


module.exports.attributes = {
  name: 'isOpenRoute',
  version: '1.0.0'
}
