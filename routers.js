'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.router('/')
        .get(lsonku.index);
}