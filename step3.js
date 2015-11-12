'use strict'

const Hapi = require('hapi')
const Joi = require('joi')

const server = new Hapi.Server()
server.connection({ port: 8080 })

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

server.start((err) => {
  console.log(err || 'server started on ' + server.info.port)
})
