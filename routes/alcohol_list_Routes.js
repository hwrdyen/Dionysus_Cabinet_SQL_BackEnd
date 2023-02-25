const router = require('express').Router();
const alcohol_list_Controller = require('../controllers/alcohol_list_Controller');

router.route('/').get(alcohol_list_Controller.index);

module.exports = router;