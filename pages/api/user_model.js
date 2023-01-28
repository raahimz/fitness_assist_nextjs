var mongoose = require('mongoose');

const codesprintUserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  calories: {
    day: {
      type: Number,
    },
    consumed: {
      type: Number,
    },
    burned: {
      type: Number,
    },
    maximum: {
      type: Number,
    },
  },
  weight: [
    {
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      value: {
        type: Number,
      },
    },
  ],
});

module.exports =
  mongoose.models.CodesprintUser ||
  mongoose.model('CodesprintUser', codesprintUserSchema);
