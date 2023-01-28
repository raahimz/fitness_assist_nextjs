const mongoose = require('mongoose');
var User = require('../user_model.js');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('working.....');
    // Getting username from body
    let username = req.body.username;
    let new_date = parseInt(req.body.new_date);

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
        calories: {
          burned: 0,
          maximum: userFound[0].calories.maximum,
          day: new_date,
          consumed: 0,
        },
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
