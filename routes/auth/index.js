'use strict'

const express = require('express')
const router = express.Router()

const controller = require('./auth.controller')

router.post('/user', controller.user)
router.post('/', controller.authenticate)

module.exports = router
