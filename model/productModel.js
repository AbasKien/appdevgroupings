const db = require('../config/db');

const product = {
    // Create product
    create: (data, callback) => {
        const query = "INSERT INTO products (name, category, price, stock, image) VALUES (?, ?, ?, ?, ?)";
        db.query(query, [data.name, data.category, data.price, data.quantity, data.image], callback);
    },
    
    // Get all products
    getAll: (callback) => {
        const query = "SELECT * FROM products";
        db.query(query, callback);
    },

    // Update product (price and stock)
    update: (id, data, callback) => {
        const query = "UPDATE products SET price = ?, stock = ? WHERE id = ?";
        db.query(query, [data.price, data.stock, id], callback);
    },

    // Delete product by ID
    delete: (id, callback) => {
        const query = "DELETE FROM products WHERE id = ?";
        db.query(query, [id], callback);
    }
};

module.exports = product;