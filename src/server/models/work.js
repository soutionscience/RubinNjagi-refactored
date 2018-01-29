const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const image=  new Schema({
    location: String,
    name: String
})


const work = new Schema({
    title: String,
    images:[image],
    company: String,
    position: String,
    desc: String
})


module.exports = mongoose.model('works', work)


