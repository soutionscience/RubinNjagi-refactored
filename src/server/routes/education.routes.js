const express = require('express');
const router = express.Router();
const controller = require('../controllers/education.controller')

router.route('/')
.post(controller.post)
.get(controller.get)

router.route('/:id')
.get(controller.getOne)
.delete(controller.deleteOne)

router.route('/:id/images')
.post(controller.addImage)


module.exports = router;