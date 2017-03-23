var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/houseSelling');

let Data = require("./models/dataSchema.js");
var slug = require('slug')

function insertItem() {
    let item1 = new Data({
        title: 'jual rumah di bsd',
        image: '',
        spec: 'baja ringan',
        price: 120000000,
        address: 'cisauk',
        Latitude: 1234,
        Longitude: -1234,
        slug: slug('jual rumah di bsd')
    });

    item1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`item 1 berhasil dimasukkan`);
    });

}

insertItem()
