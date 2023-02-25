// import seed data files, arrays of objects
const AlcoholListData = require('../seed_data/alcohol_list');
const CocktailRecipesData = require('../seed_data/cocktail_recipes');
const RepresentMoodListData = require('../seed_data/represent_mood_list');
const TastePreferencesListData = require('../seed_data/taste_preferences_list');

exports.seed = function (knex) {
  return knex('alcohol_list')
    .del()
    .then(function () {
      return knex('alcohol_list').insert(AlcoholListData);
    })
    .then(() => {
      return knex('cocktail_recipes').del();
    })
    .then(() => {
      return knex('cocktail_recipes').insert(CocktailRecipesData);
    })
    .then(() => {
      return knex('represent_mood_list').del();
    })
    .then(() => {
      return knex('represent_mood_list').insert(RepresentMoodListData);
    })
    .then(() => {
      return knex('taste_preferences_list').del();
    })
    .then(() => {
      return knex('taste_preferences_list').insert(TastePreferencesListData);
    });
};