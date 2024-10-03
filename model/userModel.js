const db = require('../config/db');

const userModel = {
    
    getAll:(callback) =>{
        const query = "Select * FROM users";
        db.query(query, callback);
    },
     // Delete user
     delete: (id, callback) => {
        const query = 'DELETE FROM users WHERE id = ?';
        db.query(query, [id], callback);
    },    
  
  
};

module.exports = userModel;
