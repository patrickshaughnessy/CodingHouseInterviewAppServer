'use strict'

const mongoose = require('mongoose')
const deepPopulate = require('mongoose-deep-populate')(mongoose)
const Schema = mongoose.Schema

const SettingsSchema = new Schema({
  user: { type: String, unique: true },
  categories: [
    {
      category: { type: Schema.Types.ObjectId, ref: 'Category' },
      questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
    }
  ]
}).plugin(deepPopulate)

module.exports = mongoose.model('Settings', SettingsSchema)
