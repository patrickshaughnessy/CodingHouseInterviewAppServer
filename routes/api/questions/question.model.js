'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  levels: [
    {
      type: {type: String},
      question: String,
      placeholder: String,
      label: String,
      options: [String],
      defaultValue: Schema.Types.Mixed,
      range: Number
    }
  ]
})

module.exports = mongoose.model('Question', QuestionSchema);
