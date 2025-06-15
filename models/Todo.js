const mongoose = require('mongoose');



const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });




module.exports = mongoose.model('Todo', todoSchema);
