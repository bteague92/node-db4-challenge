
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe-name')
                .notNullable()
                .unique()
        })
        .createTable('ingredients', tbl => {
            tbl.increment()
            tbl.integer('recipe-id')
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
            tbl.string('name', 200)
            tbl.float('quantity', 200)
            tbl.string('unit-of-measurement', 200)
        })
        .createTable('instructions', tbl => {
            tbl.increment()
            tbl.integer('recipe-id')
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
            tbl.integer('step-number', 200)
                .unsigned()
                .unique()
                .notNullable()
            tbl.string('step-description', 700)
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('recipeIngredients')
        .dropTableIfExists('recipeInstructions');
};
