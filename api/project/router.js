const router = require('express').Router()

const Projects = require('./model')

router.get('/', (req, res, next)=>{
    Projects.getAllProjects()
        .then(projects=>{
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next)=>{
    Projects.createProject(req.body)
        .then(project=>{
            res.status(201).json(project)
            console.log(project)
        })
        .catch(next)
})

module.exports = router
