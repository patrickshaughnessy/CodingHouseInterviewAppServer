'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../../../middlewares/authMiddleware')

const controller = require('./settings.controller')

// router.get('/', controller.index)
router.get('/:id', auth.isAuthenticated(), controller.show)

router.post('/', auth.isAuthenticated(), controller.create)
router.put('/:id', auth.isAuthenticated(), controller.update)
router.delete('/:id', auth.isAuthenticated(), controller.delete)

module.exports = router
