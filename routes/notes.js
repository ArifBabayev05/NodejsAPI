const express = require('express');
// const { restart } = require('nodemon');
const Product = require('../models/Notes');

const router = express.Router();

router.get('/', (req, res) => {
    Product.find()
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
})

router.post('/', (req, res) => {
    const product = new Product({
        text: req.body.text,
        author:req.body.author
    })
    product.save();
    res.json(product)
    // res.send("Create Product")
})

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        author:req.body.author
    })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
})

router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => res.json(err));
})

module.exports = router;
