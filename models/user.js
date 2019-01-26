const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName   : { type : String, required: true, trim: true },
  userPassword    : { type : String, required: true, trim: true },
  securityToken    : { type : String, required: true, trim: true }
});

module.exports = mongoose.model('User', UserSchema, 'users');