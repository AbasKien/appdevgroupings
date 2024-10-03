// userController.js
const userModel = require('../model/userModel');

const DEFAULT_ADMIN = {
    email: 'admin@gmail.com', // Change to your default admin email
    password: 'admin123', // Change to your default admin password
};

const userController = {
    // Render login view
    users: (req, res) => {
        res.render('user/login');
    },
    
    // Render registration view
    registration: (req, res) => {
        res.render('user/registration'); // Render the registration view
    },

    // Handle user registration
    registrationHandler: (req, res) => {
        const { name, email, password } = req.body;

        // Insert user into the database
        userModel.create({ name, email, password }, (err, result) => {
            if (err) {
                return res.status(500).send('Error registering user.');
            }
            res.redirect('/login'); // Redirect to login after registration
        });
    },

    // Handle user login
    loginHandler: (req, res) => {
        console.log(req.body); // Log the incoming request body
    
        const { email, password } = req.body;
    
        // Check for default admin credentials
        if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
            req.session.userId = 'admin'; // Set a flag for admin session
            return res.redirect('/admin'); // Redirect to admin page
        }
    
        userModel.findByEmail(email, (err, users) => {
            // Check if users is defined
            console.log(users);
    
            if (err || users.length === 0) {
                return res.status(400).render('user/login', { error: 'User not found.' });
            }
    
            const user = users[0];
    
            if (user.password !== password) {
                return res.status(401).render('user/login', { error: 'Incorrect password.' });
            }
    
            req.session.userId = user.id; // Store user id in session
            res.redirect('/'); // Redirect to index or user dashboard
        });
    }
};

module.exports = userController;