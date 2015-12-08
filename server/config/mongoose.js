'use strict';
var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log(new Date() + ': ...multivision db opened...');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String
  });

  userSchema.methods = {
    authenticate: function(passwordToMatch) {
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  };

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'DCole');
      User.create({firstName: 'David', lastName: 'Cole', username: 'DCole', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'SGray');
      User.create({firstName: 'Susan', lastName: 'Gray', username: 'SGray', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'DGole');
      User.create({firstName: 'Dusan', lastName: 'Gole', username: 'DGole', salt: salt, hashed_pwd: hash});
    }
  });
};

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pwd).digest('hex');
}