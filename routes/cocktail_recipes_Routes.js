const router = require('express').Router();
const cocktail_recipes_Controller = require('../controllers/cocktail_recipes_Controller');

router
    .route('/')
    // get all cocktail recipes
    .get(cocktail_recipes_Controller.index)
    // create a new cocktail recipe
    .post(cocktail_recipes_Controller.createCocktailRecipe);

module.exports = router;