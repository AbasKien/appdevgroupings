const db = require('../config/db'); // Adjust according to your database setup

exportexports.addToCart = (userId, productId, quantity) => {
    return new Promise((resolve, reject) => {
        // Check if the item already exists in the cart
        db.query('SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?', [userId, productId], (err, results) => {
            if (err) return reject(err);
            if (results.length > 0) {
                // Item already exists, update quantity
                const newQuantity = results[0].quantity + quantity;
                db.query('UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?', [newQuantity, userId, productId], (err) => {
                    if (err) return reject(err);
                    resolve(); // Optionally, you could return the updated cart total here
                });
            } else {
                // Item does not exist, insert new record
                db.query('INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)', [userId, productId, quantity], (err) => {
                    if (err) return reject(err);
                    resolve(); // Optionally, return the total here
                });
            }
        });
    });
};

