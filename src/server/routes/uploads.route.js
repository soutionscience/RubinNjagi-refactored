const express = require('express');
const router = express.Router();
const controller = require('../controllers/upload.controller.js')

router.route('/')
.get(controller.get)
.post(controller.post)



module.exports = router;