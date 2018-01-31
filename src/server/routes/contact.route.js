const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact.controller')


router.route('/')
//.get(controller.get)
.get(controller.get)
.post(controller.post)


module.exports = router;