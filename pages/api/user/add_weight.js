const mongoose = require('mongoose');
var User = require('../user_model.js');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('working.....');
    // Getting username from body
    let username = req.body.username;
    let value = parseInt(req.body.value);
    let day = parseInt(req.body.day);
    let month = parseInt(req.body.month);

    // DB
    const mongoURI =
      'mongodb+srv://admin-raahim:d1gital10@cluster0.rjmzd.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let userFound = await User.find({ username });
    let updatedUser = await User.findOneAndUpdate(
      { username },
      {
        weight: [
          ...(userFound[0].weight && userFound[0].weight),
          { value, day, month },
        ],
      },
      { new: true }
    );

    if (userFound) {
      res.status(200).json({ user: updatedUser });
    } else {
      res.status(401).json({ error: 'invalid username' });
    }
    return;
  } else {
    res.status(405).send({ message: 'only POST requests allowed' });
    return;
  }
}
