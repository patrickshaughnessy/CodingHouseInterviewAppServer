'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const InterviewSchema = new Schema({
  userID: String,
  interviewerID: String,
  interviewerName: String,
  questions: Object,
  answers: Object
})

module.exports = mongoose.model('Interview', InterviewSchema);
