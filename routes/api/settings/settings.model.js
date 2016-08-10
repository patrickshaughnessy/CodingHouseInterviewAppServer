'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const SettingsSchema = new Schema({
  user: { type: String, unique: true },
  categories: [
    {
      category: { type: Schema.Types.ObjectId, ref: 'category'},
      questions: [{ type: Schema.Types.ObjectId, ref: 'question'}]
    }
  ]
})

module.exports = mongoose.model('Settings', SettingsSchema);
