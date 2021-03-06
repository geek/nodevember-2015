'use strict'

const Chairo = require('chairo')
const Hapi = require('hapi')
const IsOpen = require('./is_open')
const IsOpenRoute = require('./is_open_route')

const server = new Hapi.Server()
server.connection({ port: 8080 })

server.register([Chairo, IsOpen, IsOpenRoute], () => {
  server.start((err) => {
    console.log(err || 'server started on ' + server.info.port)
  })
})
