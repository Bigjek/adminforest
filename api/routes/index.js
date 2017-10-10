const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/my-blog');
const ctrlWork = require('../controllers/work');
const ctrlAbout = require('../controllers/about');
const ctrlAvatar = require('../controllers/avatar');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
router.put('/blog/:id', ctrlBlog.editArticle);
router.delete('/blog/:id', ctrlBlog.deleteArticle);

router.get('/work', ctrlWork.getWorks);
router.post('/work', ctrlWork.createWork);
router.put('/work/:id', ctrlWork.editWork);
router.delete('/work/:id', ctrlWork.deleteWork);

router.get('/about', ctrlAbout.getAbouts);
router.post('/about', ctrlAbout.createAbout);
router.put('/about/:id', ctrlAbout.editAbout);
router.delete('/about/:id', ctrlAbout.deleteAbout);

router.get('/avatar', ctrlAvatar.getAvatar);
router.post('/avatar', ctrlAvatar.setAvatar);


module.exports = router;