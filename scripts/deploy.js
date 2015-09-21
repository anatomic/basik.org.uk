'use strict';
var pages = require('gh-pages');
var path = require('path');

pages.publish(path.join(__dirname, '../build'), function handleComplete() {
    process.exit();
})