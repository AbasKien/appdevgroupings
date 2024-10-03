const product = require('../model/productModel');
const user = require('../model/userModel');

const adminController = {
    // Renders the admin dashboard
    admin: (req, res) => {
        res.render('admin/admin');
    },

    // Renders the product management page
    manageProducts: (req, res) => {
        product.getAll((err, results) => {
            if (err) {
                return res.status(500).send('Error retrieving products');
            }
            res.render('admin/manageProducts', { products: results });
        });
    },


    // Adds a new product
    addProduct: (req, res) => {
        const { name, category, price, stock } = req.body;
        const productImage = req.file.path.replace(/\\/g, '/'); // Handle file upload path

        product.create({
            name,
            category,
            price,
            quantity: stock,
            image: productImage
        }, (err) => {
            if (err) {
                return res.status(500).send('Error adding product');
            }
            res.redirect('/admin/manage-products');
        });
    },

    // Updates price and stock for a product
    updateProduct: (req, res) => {
        const { id } = req.params; // Get product ID from URL
        const { price, stock } = req.body;

        product.update(id, { price, stock }, (err) => {
            if (err) {
                return res.status(500).send('Error updating product');
            }
            res.redirect('/admin/manage-products'); // Reload the page after update
        });
    },

    // Deletes a product by ID
    deleteProduct: (req, res) => {
        const { id } = req.params;

        product.delete(id, (err) => {
            if (err) {
                return res.status(500).send('Error deleting product');
            }
            res.redirect('/admin/manage-products'); // Reload the page after deletion
        });
    },

    // Renders the user management page
    manageUsers: (req, res) => {
        res.render('admin/manageUsers');
    },
    manageUsers: (req, res) => {
        user.getAll((err, results) => {
            if (err) {
                return res.status(500).send('Error retrieving users');
            }
            res.render('admin/manageUsers', { users: results }); // Pass users to the view
        });
    },


    // Deletes a user by ID
// Deletes a user by ID
deleteUser: (req, res) => {
    const { id } = req.params;
    user.delete(id, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error deleting user' });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
}

};

module.exports = adminController;