'use strict'

const Chairo = require('chairo')
const Hapi = require('hapi')
const isOpen = require('./is_open')
const isOpenRoute = require('./is_open_route')

const server = new Hapi.Server()
server.connection({ port: 8080 })

server.register([Chairo, isOpen, isOpenRoute], () => {
  server.start((err) => {
    console.log(err || 'server started on ' + server.info.port)
  })
})
