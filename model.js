
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    user: String,
    email: String,
    password: String,    
    isActive: {
      type: Boolean,
      default: true,
    },  
    isDeleted: {
      type: Boolean,
      default: false,
    }  
  },

  {
    timestamps: true,
  }

  )
);

module.exports = User;

