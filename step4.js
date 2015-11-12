'use strict'

const Hapi = require('hapi')
const Plugin1 = require('./plugin1')

const server = new Hapi.Server()
server.connection({ port: 8080 })

server.register(Plugin1, () => {
  server.start((err) => {
    console.log(err || 'server started on ' + server.info.port)
  })
})
