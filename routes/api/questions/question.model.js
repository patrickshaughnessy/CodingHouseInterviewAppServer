'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'category'},
  levels: [
    {
      type: {type: String},
      question: String,
      placeholder: String,
      label: String,
      options: [String],
      default: Schema.Types.Mixed,
      range: Number
    }
  ]
})

module.exports = mongoose.model('Question', QuestionSchema);
