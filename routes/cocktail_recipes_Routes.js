const router = require('express').Router();
const cocktail_recipes_Controller = require('../controllers/cocktail_recipes_Controller');

router.route('/').get(cocktail_recipes_Controller.index);

module.exports = router;