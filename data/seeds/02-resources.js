exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { 
          resource_name: 'shirts',
          resource_description: 'two pair of black shirts'
        },
        { 
          resource_name: 'pants',
          resource_description: 'two pair of black pants'
        },
        { 
          resource_name: 'boots',
          resource_description: 'two pair of black boots'
        },
        { 
          resource_name: 'soap',
          resource_description: 'do not ask questions'
        }
      ]);
    });
};
