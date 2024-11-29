const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  size: Number,
  mimetype: String,
});

module.exports = mongoose.model('File', fileSchema);
