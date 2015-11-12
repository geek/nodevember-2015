'use strict'

const Chairo = require('chairo')
const Hapi = require('hapi')
const ArrivalTime = require('./arrival_time')
const ArrivalOpenRoute = require('./arrival_open_routeV2')

const server = new Hapi.Server()
server.connection({ port: 8080 })

server.register([Chairo, ArrivalTime, ArrivalOpenRoute], () => {
  server.start((err) => {
    console.log(err || 'server started on ' + server.info.port)
  })
})
