var path = require('path');

module.exports = {
  compiled: path.join(__dirname, 'dist'),
  js:       path.join(__dirname, 'scripts'),
  vendor:   path.join(__dirname, 'vendor'),
  sass:     path.join(__dirname, 'sass')
};