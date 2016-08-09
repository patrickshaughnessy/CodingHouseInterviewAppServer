'use strict';

require('rootpath')()
const request = require('supertest'),
      { expect } = require('chai');

exports = describe('Auth route /auth', function() {
  let server = require('app');
  
  describe('POST /auth', function(){
    it('returns token and user info', function(done) {
      let fakeUser = {
        email: 'admin@admin.com',
        password: 'admin'
      }
      request(server)
      .post('/auth')
      .send(fakeUser)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err
        let { token, user } = res.body;
        expect(token).to.exist
        expect(user).to.exist
        done()
      })
    })

    it('sends error with incorrect credentials', function(done) {
      let fakeUser = {
        email: 'bad@credentials.com',
        password: 'test'
      }
      request(server)
      .post('/auth')
      .send(fakeUser)
      .expect(500)
      .end(function(err, res) {
        if (err) throw err
        let { message } = res.body;
        expect(message).to.exist
        done()
      })
    })
  })
})
