const express = require('express')
const router = express.Router();
const controller = require('../controllers/about.controller.js')

router.route('/')
.get(controller.get)
.post(controller.post)
.delete(controller.delete)

module.exports = router;