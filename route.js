const express = require('express');

const { basePage } = require('./controller');

const router = express.Router();



router.get('/', basePage);

module.exports = router;