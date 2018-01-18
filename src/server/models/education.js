const mongoose = require('mongoose')

const Schema= mongoose.Schema

var education = new Schema({
    title: String,
    school: String,
    course: String,
    desc: String
})

module.exports = mongoose.model('education', education)