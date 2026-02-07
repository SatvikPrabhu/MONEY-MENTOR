const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },

  // Profile fields
  name: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  location: {
    type: String,
    default: ""
  },
  profilePicture: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
