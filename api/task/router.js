const router = require('express').Router()

const Tasks = require('./model')

router.get('/', (req, res, next)=>{
    Tasks.getAllTasks()
        .then(resources=>{
            res.status(200).json(resources)
        })
        .catch(next)
})



module.exports = router
