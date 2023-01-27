var mongoose = require('mongoose');

const codesprintUserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports =
  mongoose.models.CodesprintUser ||
  mongoose.model('CodesprintUser', codesprintUserSchema);
