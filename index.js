// only ES5 is allowed in this file
require('babel-core/register');

// other babel configuration, if necessary

// load your app
var app = require('./src');
console.log(app.default(2));
