var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/houseSelling');
var slug = require('slug')
const Data = require('../models/dataSchema');

router.get('/', function (req, res) {
    Data.find()
        .then(function (result) {
            res.send(result)
        });
});

router.post('/', function (req, res) {
    let data = new Data({
        title: req.body.title,
        image: req.body.image,
        spec: req.body.spec,
        harga: req.body.harga,
        address: req.body.address,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        slug: slug(req.body.title)
    });

    data.save(function (err, result) {
        if (err) return console.error(err);
        res.send(result)
    });
});

router.put('/:slug', function (req, res) {
    Data.findOneAndUpdate({
        slug: req.params.slug
    }, {
        $set: {
            title: req.body.title,
            image: req.body.image,
            spec: req.body.spec,
            harga: req.body.harga,
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            slug: slug(req.body.title)
        }
    }, {
        new: true
    }, function (err, result) {
        if (err) return res.send(err.message);
        res.send(result);
    });
});

router.delete('/:slug', function (req, res) {
    Data.findOneAndRemove({
        slug: req.params.slug
    }, function (err, Data) {
        var response = {
            message: `Data with dataId ${req.params.slug} successfully deleted`,
            id: Data._id
        };
        res.send(response);
    });
});

module.exports = router;
