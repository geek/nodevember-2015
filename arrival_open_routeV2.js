'use strict'

const Boom = require('boom')
const Joi = require('joi')


module.exports = function (server, options, next) {

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

          request.seneca.client({ host: 'isopen', port: 8000 }).act({ role: 'isOpen', time: arrival.time}, (err, message) => {
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
  name: 'arrivalOpenRoute',
  version: '2.0.0'
}
