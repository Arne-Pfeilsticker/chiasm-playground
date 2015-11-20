'use strict';

var app = require('angular').module('chiasmApp');

app.service('ImprintService', require('./imprint'));
app.service('TodoService', require('./todos'));
