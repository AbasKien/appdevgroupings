<<<<<<< Updated upstream
const express = require('express');
const router = express.Router();
const adminController = require("../controller/adminController.js");
const upload = require('../config/multer'); // Adjust the path accordingly






//admin
router.get('/admin', adminController.admin);
router.get('/admin/manage-products', adminController.manageProducts);
router.post('/admin/manage-products', upload.single('productImage'), adminController.addProduct);
router.get('/admin/manage-users', adminController.manageUsers);
router.post('/admin/manage-products/delete/:id', adminController.deleteProduct);

//user




module.exports = router;
=======
const express = require('express');
const router = express.Router();
const indexController = require("../controller/indexController.js");
const adminController = require("../controller/adminController.js");
const upload = require('../config/multer'); // Adjust the path accordingly
const userController = require('../controller/userController')

//index
router.get('/', indexController.index);
router.get('/about-us', indexController.aboutUs);
router.get('/contact-us', indexController.contactUs);
router.get('/product', indexController.product);
router.get('/blog', indexController.blog);




//admin
router.get('/admin', adminController.admin);
router.get('/admin/manage-products', adminController.manageProducts);
router.post('/admin/manage-products', upload.single('productImage'), adminController.addProduct);
router.get('/admin/manage-users', adminController.manageUsers);
router.post('/admin/manage-products/update/:id', adminController.updateProduct);
router.post('/admin/manage-products/delete/:id', adminController.deleteProduct);

//user
router.get('/login', userController.users); // Render login view
router.get('/register', userController.registration); // Render registration view
router.get('/manage-users', adminController.manageUsers);
router.delete('/admin/delete-user/:id', adminController.deleteUser);

// Handle registration and login
router.post('/register', userController.registrationHandler); // Handle registration
router.post('/login', userController.loginHandler); // Handle login




module.exports = router;
>>>>>>> Stashed changes
