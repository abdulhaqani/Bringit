/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const DisplaySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  img_path: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: Date.now
  },
  company: {
    type: String,
    default: Date.now
  },
  inCart: {
    type: Boolean,
    default: false
  }
});

mongoose.model('displayForms', DisplaySchema);
