const express = require('express');
const router = express.Router();
const controller = require('../controllers/education.controller')

router.route('/')
.post(controller.post)
.get(controller.get)



module.exports = router;