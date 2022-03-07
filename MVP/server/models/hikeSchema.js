const { Schema, model } = require('mongoose');

const hikeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  finish_date: {
    type: Date,
    required: true,
  },
});

module.exports = hikeSchema;
