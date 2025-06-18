const mongoose = require('mongoose');

const savingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengeName: { type: String, required: true },
  litres: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('saving', savingSchema);
