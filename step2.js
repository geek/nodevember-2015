'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 8080 })

server.route({
  method: 'get',
  path: '/{time}',
  handler: (request, reply) => {
    var hours = new Date(request.params.time).getHours()

    reply(hours >= 11 && hours < 22)
  }
})

server.start((err) => {
  console.log(err || 'server started on ' + server.info.port)
})
