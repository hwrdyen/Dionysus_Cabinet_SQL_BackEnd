exports.up = function (knex) {
    return knex.schema
      .createTable('alcohol_list', (table) => {
        table.string('alcohol_name');
        table.string('image_name');
      })
      .createTable('cocktail_recipes', (table) => {
        table.string('recipe_id');
        table.string('img_id');
        table.string('cocktail_name');
        table.string('cocktail_ingredients', 5000);
        table.string('cocktail_included_alchohol', 5000);
        table.string('cocktail_recipe_steps', 5000);
        table.string('represent_mood');
        table.string('taste_preferences');
        table.string('cocktail_recipe_author_name');
        table.string('cocktail_recipe_author_email');
      })
      .createTable('represent_mood_list', (table) => {
        table.string('mood_name');
        table.string('image_name');
      })
      .createTable('taste_preferences_list', (table) => {
        table.string('taste_name');
        table.string('taste_description');
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('alcohol_list').dropTable('cocktail_recipes').dropTable('represent_mood_list').dropTable('taste_preferences_list');
  };
