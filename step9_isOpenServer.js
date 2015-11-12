'use strict'

const Chairo = require('chairo')
const Hapi = require('hapi')
const IsOpen = require('./is_openV2')

const server = new Hapi.Server()
server.connection({ port: 0 })

server.register([Chairo, IsOpen], () => {
  server.start((err) => {
    console.log(err || 'server started on ' + server.info.port)
  })
})
