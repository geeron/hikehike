const { Schema, model } = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const hikeSchema = new Schema({
  // start_name: {
  //   type: String,
  //   required: true,
  // },
  // start_time: {
  //   type: Date,
  //   required: true,
  // },
  // start_latitude: {
  //   type: String,
  //   required: true,
  // },
  // start_longitude: {
  //   type: String,
  //   required: true,
  // },
  // start_altitude: {
  //   type: Number,
  //   required: true,
  // },
  // finish_name: {
  //   type: String,
  //   required: true,
  // },
  // finish_time: {
  //   type: Date,
  //   required: true,
  // },
  // finish_latitude: {
  //   type: String,
  //   required: true,
  // },
  // finish_longitude: {
  //   type: String,
  //   required: true,
  // },
  // finish_altitude: {
  //   type: Number,
  //   required: true,
  // },
  start: {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    altitude: {
      type: Number,
      required: true,
    },
  },
  finish: {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    altitude: {
      type: Number,
      required: true,
    },
  },
  user: {
    type: String,
    required: true,
  },
  hike: {
    rating: Number,
    difficulty: Number,
    review: String,
    tags: String,
    photos: String,
  },
});

module.exports = hikeSchema;
