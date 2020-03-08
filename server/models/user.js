const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// for password encryption
const bcrypt = require("bcrypt");
const SALT_I = 10;
require("dotenv").config();

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 100
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

// Hashing the password so it doesn't show
// .pre executes function in parameter2 before doing parameter1
userSchema.pre("save", function(next) {
  var user = this;

  // so that pw only gets hashed when user is trying to change thier pw. isModified is a method from mongo
  if (user.isModified("password")) {
    bcrypt.genSalt(SALT_I, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// method to compare password entered for login with stored hashed pw
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function(cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), process.env.SECRET);

  user.token = token;
  user.save(function(err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

// statics
userSchema.statics.findByToken = function(token, cb) {
  var user = this;

  jwt.verify(token, process.env.SECRET, function(err, decode) {
    user.findOne({ _id: decode, token: token }, function(err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
