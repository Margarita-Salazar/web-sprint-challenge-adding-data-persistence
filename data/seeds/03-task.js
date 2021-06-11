exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {
          project_id: 1,
          task_description: 'bomb corporate building',
          task_notes: 'do not ask questions',
        },
      ]);
    });
};
