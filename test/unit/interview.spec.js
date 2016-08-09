'use strict';

require('rootpath')()
const request = require('supertest'),
      { expect } = require('chai');

exports = describe('Interview route /api/interviews', function() {
  let server = require('app');

  beforeEach(function(){
    // setup fake interviews data
  })

  afterEach(function(){
    // clear test interviews data
  })

  describe('GET /api/interviews', function(){
    it('returns all interviews', function(done) {
      request(server)
      .get('/api/interviews')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err
        // expect res to have interviews
        done()
      })
    })
  })

  describe('POST /api/interviews', function(){
    it('creates a new interview', function(done) {
      done()
      // let interviewData = {
      //   name: 'Bob Jones'
      // }
      //
      // request(server)
      // .post('/api/interviews')
      // .send(interviewData)
      // .expect(200)
      // .end(function(err, res) {
      //   if (err) throw err
      //   // let { interview } = res.body
      //   // expect(interview).to.exist
      //   done()
      // })
    })
  })

  describe('PUT /api/interviews', function(){
    it('edits an existing interview', function(done) {
      done()
      // let interviewData = {
      //   name: 'Bob Jones'
      // }
      //
      // request(server)
      // .put('/api/interviews')
      // .send(interviewData)
      // .expect(200)
      // .end(function(err, res) {
      //   if (err) throw err
      //   // let { interview } = res.body
      //   // expect(interview).to.exist
      //   done()
      // })
    })
  })

  describe('DELETE /api/interviews/:id', function(){
    it('deletes an interview', function(done) {
      done()
      // let interviewData = {
      //   name: 'Bob Jones'
      // }
      //
      // request(server)
      // .put('/api/interviews')
      // .send(interviewData)
      // .expect(200)
      // .end(function(err, res) {
      //   if (err) throw err
      //   // let { interview } = res.body
      //   // expect(interview).to.exist
      //   done()
      // })
    })
  })

})
