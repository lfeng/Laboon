'use strict';

var router = require('koa-router')();

var router = require('koa-router')();
require('./users/auth')(router);

module.exports = function(app) {
    app.use(router.routes());
};
