var mongose = require('mongoose');

var Schema = mongose.Schema;

var about = new Schema({
    title: String,
    subtitle: String,
    description: String,
    secondtitle: String,
    secondsubtitle: String,
    seconddescription: String


})

module.exports = mongose.model('about', about)