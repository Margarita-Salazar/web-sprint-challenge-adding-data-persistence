const db = require('../../data/dbConfig')

async function getAllProjects(){
    const rows = await db('projects as p')

    rows.map(p=>{
        p.project_completed === 0 ?
            p.project_completed = false
        :
            p.project_completed = true
    })
    
    return rows
}

async function getProjectsById(id){
    const project = await db('projects as p')
        .where('project_id', id)
        .first()

    project.project_completed === 0 ?
        project.project_completed = false
    :   
        project.project_completed = true
    
    return project
}

function createProject(project){
    return db('projects')
    .insert(project, 'project_id')
    .then(([id]) => getProjectsById(id))
}

module.exports = {
    getAllProjects,
    createProject,
}
