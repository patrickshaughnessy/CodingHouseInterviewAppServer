'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../../../middlewares/authMiddleware')

const controller = require('./interview.controller')

router.get('/', auth.isAuthenticated(), controller.index)
router.post('/', auth.isAuthenticated(), controller.create)
router.put('/', auth.isAuthenticated(), controller.update)
router.delete('/:id', auth.isAuthenticated(), controller.delete)

module.exports = router
