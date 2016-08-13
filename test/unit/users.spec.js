// 'use strict'
//
// require('rootpath')()
// const request = require('supertest')
// const express = require('express')
// const config = require('config')
// const { expect } = require('chai')
//
// exports = describe('Users route /api/users', function () {
//   describe('POST /api/users', function () {
//     const { port, ip } = config.environment.server
//     const app = express()
//     config.express(app)
//     config.routes(app)
//
//     let server
//     let token
//
//     before(function (done) {
//       server = require('http').createServer(app)
//       server.listen(port, ip)
//       server.on('listening', function () {
//
//       })
//     })
//
//     beforeEach(function (done) {
//       server = require('http').createServer(app)
//       server.listen(port, ip)
//       server.on('listening', function () {
//         done()
//       })
//     })
//
//     afterEach(function (done) {
//       server.close()
//       done()
//     })
//
//     it('returns token and user info', function (done) {
//       let fakeUser = {
//         email: 'admin@admin.com',
//         password: 'admin'
//       }
//       request(server)
//       .post('/auth')
//       .send(fakeUser)
//       .expect(200)
//       .end(function (err, res) {
//         if (err) throw err
//         let { token, user } = res.body
//         expect(token).to.exist
//         expect(user).to.exist
//         done()
//       })
//     })
//
//     it('sends error with incorrect credentials', function (done) {
//       let fakeUser = {
//         email: 'bad@credentials.com',
//         password: 'test'
//       }
//       request(server)
//       .post('/auth')
//       .send(fakeUser)
//       .expect(500)
//       .end(function (err, res) {
//         if (err) throw err
//         let { message } = res.body
//         expect(message).to.exist
//         done()
//       })
//     })
//   })
// })
