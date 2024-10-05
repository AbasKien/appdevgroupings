const express = require('express');
const router = express.Router();
const indexController = require("../controller/indexController.js");
const upload = require('../config/multer'); // Adjust the path accordingly

//index
router.get('/', indexController.index);
router.get('/about-us', indexController.aboutUs);
router.get('/contact-us', indexController.contactUs);
router.get('/blog', indexController.blog);

module.exports = router;
