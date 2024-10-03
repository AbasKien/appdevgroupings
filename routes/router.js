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
