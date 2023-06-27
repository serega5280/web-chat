const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL || '', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});
const Schema = mongoose.Schema;
const userScheme = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength:6,
    maxlength:20
  }
});

userScheme.methods.done = function () {
  const greeting = `User ${this.login} has been successfully registered`;
  console.log(greeting);
}

const User = mongoose.model('User', userScheme);

let user = new User({login: "itgenik", password: "itgenio"});
user.save()
