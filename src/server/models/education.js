const mongoose = require('mongoose')

const Schema= mongoose.Schema

var image =new Schema({
    name: String,
    location: String
})

var education = new Schema({
    title: String,
    images: [image],
    school: String,
    course: String,
    desc: String
})

module.exports = mongoose.model('education', education)