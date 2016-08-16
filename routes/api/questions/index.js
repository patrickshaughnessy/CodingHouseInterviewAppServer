'use strict'

const express = require('express')
const router = express.Router()

const controller = require('./question.controller')

router.get('/', controller.index)
router.post('/', controller.create)
router.put('/', controller.update)
router.put('/levels', controller.editLevel)
router.delete('/:id', controller.delete)

module.exports = router
