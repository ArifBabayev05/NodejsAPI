const express = require('express');
// const { restart } = require('nodemon');
const Product = require('../models/Deal');

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
        person: req.body.person,
        organisation: req.body.organisation,
        title: req.body.title,
        valuet: req.body.valuet,
        closeDate: req.body.closeDate,
        mail: req.body.mail,
        tel: req.body.tel,
        status: req.body.status,
        summary: req.body.summary,
    })
    product.save();
    res.json(product)
    // res.send("Create Product")
})

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        person: req.body.person,
        organisation: req.body.organisation,
        title: req.body.title,
        valuet: req.body.valuet,
        closeDate: req.body.closeDate,
        mail: req.body.mail,
        tel: req.body.tel,
        status: req.body.status,
        summary: req.body.summary,
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
