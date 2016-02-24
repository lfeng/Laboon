'use strict';

var koa = require('koa');
var logger = require('koa-logger');

var app = koa();

app.use(logger());

app.use(require('./lib/error_handler'));

require('./routes')(app);

//app.use(function* () {
//    this.body = 'Hello World';
//});

//module.exports = app;
app.listen(3000);
