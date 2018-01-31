const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const contact = new Schema({
    firstname: String,
    secondname: String,
    email: String,
    message: String

})

module.exports = mongoose.model('contact', contact)