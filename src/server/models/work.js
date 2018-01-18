const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const work = new Schema({
    title: String,
    company: String,
    position: String,
    desc: String
})


module.exports = mongoose.model('works', work)


