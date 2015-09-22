'use strict';
var fs = require('fs');
var path = require('path');

function buildHTML() {

}

function buildSupportingAssets(paths) {
    return Promise.all(paths.map(function (path) {
        return new Promise(function (resolve, reject) {
            fs.readFile(path, function(err, file) {
                if (err) return reject(err);

                return resolve(file);
            })
        });
    }))
}