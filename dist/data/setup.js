"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var setup = function (pool) {
    console.log('Looking for the setup file...');
    return fs_1.promises
        .readFile(__dirname + "/../../sql/setup.sql", { encoding: 'utf-8' })
        .then(function (sql) {
        pool.query(sql);
        console.log('Query run on the setup file!');
    })
        .catch(function () { return console.log('Something went wrong'); });
};
exports.default = setup;
