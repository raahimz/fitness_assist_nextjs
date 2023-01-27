const mongoose = require('mongoose');

const codesprintUserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
});
const CodesprintUser = mongoose.model('CodesprintUser', codesprintUserSchema);

export default async function handler(req, res) {
  // DB
  const mongoURI =
    'mongodb+srv://admin-raahim:d1gital10@cluster0.rjmzd.mongodb.net/?retryWrites=true&w=majority';
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const codesprintUser = new CodesprintUser({ username: 'testuser2' });
  codesprintUser.save();

  res.status(200).json({ name: 'Created user' });
}
