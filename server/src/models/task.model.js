const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Task', taskSchema);
