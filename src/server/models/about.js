var mongose = require('mongoose');

var Schema = mongose.Schema;

var about = new Schema({
    image: String,
    title: String,
    subtitle: String,
    description: String,
    secondTitle: String,
    secondSubTitle: String,
    secondDesc: String


})

module.exports = mongose.model('about', about)