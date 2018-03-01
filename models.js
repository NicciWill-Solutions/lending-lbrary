'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  owner: {
    name: {
      type: String,
      required: true
    },
    slack: {
      type: String,
      required: true
    }
  }
});

const BookModel = mongoose.model('Book', BookSchema);

module.exports = { BookModel };