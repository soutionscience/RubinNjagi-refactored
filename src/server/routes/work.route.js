const express = require('express');
const router = express.Router()
const controller = require('../controllers/work.controller')


router.route('/')
.get(controller.get)
.post(controller.post)

router.route('/:id')
.delete(controller.deleteOne)

router.route('/:id/images')
.post(controller.addImage)



module.exports = router;
