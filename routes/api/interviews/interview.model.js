'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterviewSchema = new Schema({
  intervieweeID: String,
  interviewee: Object,
  interviewerID: String,
  interviewer: Object,
  data: Object,
  intervieweeTime: Number,
  interviewerTime: Number
})

module.exports = mongoose.model('Interview', InterviewSchema)
