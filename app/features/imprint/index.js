'use strict';

var app = require('angular').module('chiasmApp');

app.service('ImprintService', require('./imprint.service'));
app.controller('ImprintCtrl', require('./imprint'));