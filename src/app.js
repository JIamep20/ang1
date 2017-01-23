var angular = require('angular');
var router = require('angular-route');

var app = angular.module('app', [router]);

require('./index.html');

require('./routes')(app);
require('./constants')(app);
require('./filters/index')(app);
require('./components/index.js')(app);
module.exports = app;