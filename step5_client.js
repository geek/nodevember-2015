'use strict'

const Seneca = require('seneca')

const seneca = Seneca().client()

seneca.act({ role: 'isOpen', time: 'Wed Nov 11 2015 11:06:02'}, (err, result) => {
  console.log(result.isOpen)
})
