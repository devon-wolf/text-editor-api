"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNotFound = exports.handleError = void 0;
var types_1 = require("../../types");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var handleError = function (err, req, res, next) {
    var status = err.status || 500;
    res.status(status);
    console.log(err);
    res.send({
        status: status,
        message: err.message
    });
};
exports.handleError = handleError;
var handleNotFound = function (req, res, next) {
    var err = new types_1.ExpressError('Not Found');
    err.status = 404;
    next(err);
};
exports.handleNotFound = handleNotFound;
