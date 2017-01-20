var angular = require('angular');
var router = require('angular-route');

var app = angular.module('app', ['ngRoute']);

require('./routes')(app);
module.exports = app;