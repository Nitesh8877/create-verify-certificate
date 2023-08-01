const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default:Date.now()
  },
    sign:{
    type:String,
    required:true
  }
  // You can add more fields here based on your certificate requirements
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
