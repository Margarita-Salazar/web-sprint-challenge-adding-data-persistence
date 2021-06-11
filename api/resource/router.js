const router = require('express').Router()

const Resource = require('./model')

router.get('/', (req, res, next)=>{
    Resource.getAllResources()
        .then(resources=>{
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next)=>{
    Resource.createResource(req.body)
        .then(resource=>{
            res.status(201).json(resource)
        })
        .catch(next)
})

module.exports = router
