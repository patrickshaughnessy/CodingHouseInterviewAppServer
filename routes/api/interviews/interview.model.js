'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterviewSchema = new Schema({
  interviewee: Object,
  interviewer: Object,
  data: Object,
  intervieweeTime: Number,
  interviewerTime: Number,
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Interview', InterviewSchema)
