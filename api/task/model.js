const db = require('../../data/dbConfig')

async function getAllTasks(){
    const rows = await db('tasks as t')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
            )
        .join(
            'projects as p',
            't.project_id',
            'p.project_id' 
            )
    
    rows.map(task=>{
        task.task_completed === 0 ?
            task.task_completed = false
        :
            task.task_completed = true
    })

    return rows
}

async function getTasksById(id){
    const task = await db('tasks')
        .where('task_id', id)
        .first()
    
    task.task_completed === 0 ?
        task.task_completed = false
    :   
        task.task_completed = true

    return task
}

function createTask(task){
    return db('tasks')
        .insert(task, 'task_id')
        .then(([id])=> getTasksById(id))
}

module.exports = {
    getAllTasks,
    createTask
}
