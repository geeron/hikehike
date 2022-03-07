const mongoose = require('mongoose');
const hikeSchema = require('./hikeSchema');

const db = {};

db.hike = mongoose.model('Hike', hikeSchema)
db.mongoose = mongoose

module.exports = db;