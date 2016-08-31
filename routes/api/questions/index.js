'use strict'

const express = require('express')
const router = express.Router()
// const auth = require('../../../middlewares/authMiddleware')

const controller = require('./question.controller')

router.get('/category/:id', controller.show)
router.get('/', controller.index)

router.post('/levels', controller.levels.add)
router.post('/', controller.create)

router.put('/levels', controller.levels.edit)
router.put('/', controller.update)

router.delete('/levels/:levelID', controller.levels.remove)
router.delete('/:id', controller.delete)
//
// router.get('/category/:id', auth.isAuthenticated(), controller.show)
// router.get('/', auth.isAuthenticated(), controller.index)
//
// router.post('/levels', auth.isAuthenticated(), controller.levels.add)
// router.post('/', auth.isAuthenticated(), controller.create)
//
// router.put('/levels', auth.isAuthenticated(), controller.levels.edit)
// router.put('/', auth.isAuthenticated(), controller.update)
//
// router.delete('/levels/:levelID', auth.isAuthenticated(), controller.levels.remove)
// router.delete('/:id', auth.isAuthenticated(), controller.delete)

module.exports = router
