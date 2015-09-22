'use strict';
var pages = require('gh-pages');
var path = require('path');

pages.publish(path.join(__dirname, '../build'), function handleComplete(err) {
    if (err) { console.log(err); process.exit(1); }
    process.exit();
})