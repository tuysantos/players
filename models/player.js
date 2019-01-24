const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  firstName   : { type : String, required: true, trim: true },
  lastName    : { type : String, required: true, trim: true },
  position    : { type : String, required: true, trim: true },
  nationality : { type : String, required: true, trim: true },
});

module.exports = mongoose.model('Player', PlayerSchema, 'players');
