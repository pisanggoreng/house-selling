var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/houseSelling");

autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var dataSchema = mongoose.Schema({
    dataId: Number,
    title: String,
    image: String,
    spec: String,
    harga: String,
    address: String,
    latitude: Number,
    longitude: Number,
    slug: String

});
dataSchema.plugin(autoIncrement.plugin, {
    model: 'dataSchema',
    field: 'dataId'
});

var Data = mongoose.model('Data', dataSchema)
module.exports = Data
