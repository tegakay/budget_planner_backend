const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: { type: String },
  last_name: { type: String },
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  console.log('password',this.password)
  next();
});

// UserSchema.methods.comparePassword = async function (password) {
//     return bcrypt.compare(password, this.password);
//   };

module.exports = mongoose.model('User', UserSchema);