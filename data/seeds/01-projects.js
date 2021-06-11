exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
      { 
        project_name: 'Project Mayhem', 
        project_description: 'Do not ask questions about Project Mayhem',
        project_completed: false,
      },
    ])
    })
}
