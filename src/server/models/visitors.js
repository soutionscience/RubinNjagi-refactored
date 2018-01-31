const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visits = new Schema({
    visitors: Number,
    timestamps: true

})