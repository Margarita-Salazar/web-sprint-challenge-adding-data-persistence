const db = require('../../data/dbConfig')

function getAllResources(){
    return db('resources')
}

function getResourceById(id){
    return db('resources')
        .where('resource_id', id)
        .first()
}

async function createResource(resource){
    return db('resources')
        .insert(resource, 'resource_id')
        .then(([id]) => getResourceById(id))
}

module.exports = { 
    getAllResources,
    createResource
}
