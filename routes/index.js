const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlAuth = require('../controllers/login');
const ctrlBlog = require('../controllers/my-blog');
const ctrlWork = require('../controllers/work');
const ctrlAbout = require('../controllers/about');
const ctrlAdmin = require('../controllers/admin');

/* GET home page. */
router.get('/', ctrlHome.getIndex);
router.post('/contact', ctrlHome.sendEmail);

router.get('/login', ctrlAuth.getLoginpage);
router.post('/login', ctrlAuth.authorization);

router.get('/my-blog', ctrlBlog.getBlogpage);
router.get('/admin', ctrlAdmin.getAdminpage);
router.post('/admin/avatar', ctrlAdmin.uploadAvatar);
router.post('/admin/blog', ctrlAdmin.addArticle);
router.get('/works', ctrlWork.getWorkpage);
router.post('/admin/work', ctrlAdmin.addWork);
router.get('/about', ctrlAbout.getAboutpage);
router.post('/admin/about', ctrlAdmin.addAbout);



module.exports = router;
