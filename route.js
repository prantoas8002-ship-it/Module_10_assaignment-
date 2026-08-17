const express = require('express');

const { basePage, createBlogs, getAllBlogs } = require('./controller');

const router = express.Router();



router.get('/', basePage);
router.post('/blogs', createBlogs);
router.get('/blogs', getAllBlogs);

module.exports = router;