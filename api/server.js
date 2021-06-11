const express = require('express')

const projectRouter = require('./project/router')

const resourceRouter = require('./resource/router')

// const taskRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)

server.use('/api/resources', resourceRouter)

// server.use('/api/tasks', taskRouter)

server.use('*', (req, res)=>{
    res.send('<h1>Its working!!!</h1>')
})

server.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(err.status || 500).json({
        custom: "Something went wrong",
        message: err.message,
        stack: err.stack,
      })
})

module.exports = server
