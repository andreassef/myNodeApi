exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('nick').notNullable();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};