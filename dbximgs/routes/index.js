var express = require('express');
var router = express.Router();

/* GET home page. */
//first add the reference to the controller
var controller = require('../controller');

/* GET home page. */
router.get('/', controller.home);
module.exports = router;

router.get('/login', controller.login);

router.get('/oauthredirect',controller.oauthredirect);
