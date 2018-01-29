const express = require('express')
const router = express.Router();
const controller = require('../controllers/about.controller.js')

router.route('/')
.get(controller.get)
.post(controller.post)
.delete(controller.delete)

router.route('/:id')
.get(controller.getOne)
.delete(controller.deleteOne)
.put(controller.setFeatured)

router.route('/:id/images')
.post(controller.postImages)
.get(controller.getImages)




module.exports = router;