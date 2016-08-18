'use strict'

const express = require('express')
const router = express.Router()

const controller = require('./question.controller')

router.get('/', controller.index)

router.post('/levels', controller.levels.add)
router.post('/', controller.create)

router.put('/levels', controller.levels.edit)
router.put('/', controller.update)

router.delete('/levels/:levelID', controller.levels.remove)
router.delete('/:id', controller.delete)

module.exports = router
