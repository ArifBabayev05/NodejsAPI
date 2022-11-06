const express = require('express');
// const { restart } = require('nodemon');
const Product = require('../models/Schedule');

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
        Subject: req.body.Subject,
        Location: req.body.Location,
        CategoryColor: req.body.CategoryColor,
        StartTime: req.body.StartTime,
        EndTime: req.body.EndTime,
    })
    product.save();
    res.json(product)
    // res.send("Create Product")
})

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        Subject: req.body.Subject,
        Location: req.body.Location,
        CategoryColor: req.body.CategoryColor,
        StartTime: req.body.StartTime,
        EndTime: req.body.EndTime,
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
