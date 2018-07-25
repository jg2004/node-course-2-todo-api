
const mongoose = require('mongoose');
const User = mongoose.model('User', {
  userName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

module.exports = {User}