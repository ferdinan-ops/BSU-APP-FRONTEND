const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
  userSender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userTarget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Report = mongoose.model('report', reportSchema)
module.exports = Report
