'use strict';

const mongoose = require('mongoose'),
      deepPopulate = require('mongoose-deep-populate')(mongoose),
      Schema = mongoose.Schema;

const SettingsSchema = new Schema({
  user: { type: String, unique: true },
  categories: [
    {
      category: { type: Schema.Types.ObjectId, ref: 'Category'},
      questions: [{ type: Schema.Types.ObjectId, ref: 'Question'}]
    }
  ]
}).plugin(deepPopulate);

module.exports = mongoose.model('Settings', SettingsSchema);
