const router = require('express').Router();
const represent_mood_list_Controller = require('../controllers/represent_mood_list_Controller');

router.route('/').get(represent_mood_list_Controller.index);

module.exports = router;