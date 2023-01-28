const mongoose = require('mongoose');
var CodesprintUser = require('../user_model.js');

export default async function handler(req, res) {
  // DB
  const mongoURI =
    'mongodb+srv://admin-raahim:d1gital10@cluster0.rjmzd.mongodb.net/?retryWrites=true&w=majority';
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const codesprintUser = new CodesprintUser({
    username: 'testuser2',
    calories: { day: 6, consumed: 0, burned: 0, maximum: 2000 },
  });
  codesprintUser.save();

  res.status(200).json({ name: 'Created user' });
}
