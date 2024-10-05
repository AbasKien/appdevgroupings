const indexModel = require('../model/index');

const b = {
    index: (req, res) => {
        indexModel.getAll((err, products) => {
            if (err) {
                return res.status(500).send('Error retrieving products');
            }
            res.render('index', { products });
        });
    },

    aboutUs: (req, res) => {
        res.render('aboutUs');
    },

    contactUs: (req, res) => {
        res.render('contactUs');
    },

    blog: (req, res) => {
        res.render('blog');
    },
};

module.exports = b;