const express = require('express');
const router = express.Router();
const indexController = require("../controller/indexController.js");
const adminController = require("../controller/adminController.js");
const upload = require('../config/multer'); // Adjust the path accordingly
const userController = require('../controller/userController')

//index
router.get('/', indexController.index);




//admin
router.get('/admin', adminController.admin);

//user
router.get('/login', userController.users); // Render login view
router.get('/register', userController.registration); // Render registration view


// Handle registration and login
router.post('/register', userController.registrationHandler); // Handle registration
router.post('/login', userController.loginHandler); // Handle login




module.exports = router;