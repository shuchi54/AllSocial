//entry point to all the routes//will hv list of all the other rotes
const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/', homeController.home);

//acquire my neighbours users
router.use('/users', require('./users'))


module.exports = router;