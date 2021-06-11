const db = require('../../data/dbConfig')

async function getAllProjects(){
    let reformArray = []
    const rows = await db('projects as p')
    for(let i = 0; i < rows.length; i++ ){
        reformArray = [...reformArray, {
            project_id: rows[i].project_id,
            project_name: rows[i].project_name,
            project_description: rows[i].project_description,
            project_completed: 
            rows[i].project_completed === 0 ? false : true
        }]
    }  
    return reformArray
}

async function getProjectsById(id){
    let reformProject = {}
    const project = await db('projects as p')
        .where('project_id', id)
        .first()
    reformProject = {
        project_id: project.project_id,
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: 
            project.project_completed === 0 ? false : true
    }
    return reformProject
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
