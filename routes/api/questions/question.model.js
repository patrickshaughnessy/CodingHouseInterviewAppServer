'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  levels: [
    {
      type: { type: String, required: true },
      question: { type: String, required: true },
      placeholder: { type: String, default: '' },
      label: { type: String, default: '' },
      options: [{ type: String }],
      defaultValue: Schema.Types.Mixed,
      range: { type: Number, default: 10 }
    }
  ]
})

module.exports = mongoose.model('Question', QuestionSchema)
