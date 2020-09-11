exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('classification').notNullable();
        table.string('author').notNullable();
        table.integer('year');
        table.timestamps();
        table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('books');
};