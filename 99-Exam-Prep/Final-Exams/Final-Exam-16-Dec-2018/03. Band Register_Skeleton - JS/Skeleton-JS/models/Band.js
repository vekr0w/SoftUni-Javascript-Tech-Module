const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
  // TODO:
});

const Band = mongoose.model('Band', bandSchema);
module.exports = Band;