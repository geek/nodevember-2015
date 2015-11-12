'use strict'

const Joi = require('joi')


module.exports = function (server, options, next) {

  server.dependency('isOpen')
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
        request.seneca.act({ role: 'isOpen', time: request.params.time}, (err, result) => {
          reply(result.isOpen)
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
