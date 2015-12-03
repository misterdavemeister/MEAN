var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://dcole:multivision@ds057944.mongolab.com:57944/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}
