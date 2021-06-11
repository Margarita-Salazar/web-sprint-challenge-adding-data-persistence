const db = require('../../data/dbConfig')

async function getAllProjects(){
    let reformArray = []
    const rows = await db('projects as p')
    return db('projects')
    .then((projects)=>{
        projects.map((p)=>{
            p.project_completed === 0 ? false : true
        })
    })
    // for(let i = 0; i < rows.length; i++ ){
    //     reformArray = [...reformArray, {
    //         project_id: rows[i].project_id,
    //         project_name: rows[i].project_name,
    //         project_description: rows[i].project_description,
    //         project_completed: 
    //         rows[i].project_completed === 0 ? false : true
    //     }]
    // }  
    // return reformArray
}

function getProjectsById(id){
    return db('projects as p')
        .select('p.project_id',
                'p.project_name',
                'p.project_description',
                'p.project_completed'
                )
        .where('project_id', id)
        .first()
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
