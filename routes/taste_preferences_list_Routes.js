const router = require('express').Router();
const taste_preferences_list_Controller = require('../controllers/taste_preferences_list_Controller');

router.route('/').get(taste_preferences_list_Controller.index);

module.exports = router;