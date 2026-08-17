const express = require('express');

const { basePage, createBlogs, getAllBlogs, getSingleBlog } = require('./controller');

const router = express.Router();



router.get('/', basePage);
router.post('/blogs', createBlogs);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getSingleBlog);

module.exports = router;