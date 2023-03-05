const knex = require('knex')(require('../knexfile'));

exports.index = (_req, res) => {
  knex('cocktail_recipes')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Cocktail Recipes: ${err}`)
    );
};

exports.createCocktailRecipe = (req, res) => {
  // Validate the request body for required data
  // if (!req.body.name || !req.body.manager || !req.body.address || !req.body.phone || !req.body.email) {
  //   return res.status(400).send('Please make sure to provide name, manager, address, phone and email fields in a request');
  // }

  knex('cocktail_recipes')
    .insert(req.body)
    .then((data) => {
      // For POST requests we need to respond with 201 and the location of the newly created record
      const newCocktailRecipeURL = `/cocktail_recipes/${data[0]}`;
      res.status(201).location(newCocktailRecipeURL).send(newCocktailRecipeURL);
    })
    .catch((err) => res.status(400).send(`Error creating Cocktail Recipe: ${err}`));
};