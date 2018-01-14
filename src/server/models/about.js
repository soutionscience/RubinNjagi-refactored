var mongose = require('mongoose');

var Schema = mongose.Schema;

var image = new Schema({
    name: String,
    location: String
})

var about = new Schema({
    images: [image],
    title: String,
    subtitle: String,
    description: String,
    secondTitle: String,
    secondSubTitle: String,
    secondDesc: String


})

module.exports = mongose.model('about', about)