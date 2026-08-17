const express = require('express');

const { basePage, createBlogs, getAllBlogs, getSingleBlog } = require('./controller');
const requestRoute = require('./middleware');

const router = express.Router();



router.get('/', requestRoute, basePage);
router.post('/blogs', requestRoute, createBlogs);
router.get('/blogs',requestRoute, getAllBlogs);
router.get('/blogs/:id',requestRoute, getSingleBlog);

module.exports = router;