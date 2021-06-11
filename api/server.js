const express = require('express')

const server = express()

server.use(express.json())

server.use('*', (req, res)=>{
    res.send('<h1>Its working!!!</h1>')
})

module.exports = server
