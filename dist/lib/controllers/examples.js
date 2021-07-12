"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Example_1 = __importDefault(require("../models/Example"));
exports.default = express_1.Router()
    .post('/', function (req, res, next) {
    console.log('POST request');
    Example_1.default
        .create(req.body)
        .then(function (example) { return res.send(example); })
        .catch(next);
})
    .get('/', function (req, res, next) {
    console.log('GET request');
    Example_1.default
        .getAll()
        .then(function (examples) { return res.send(examples); })
        .catch(next);
})
    .get('/:id', function (req, res, next) {
    console.log("GET request for id " + req.params.id);
    Example_1.default
        .getById(req.params.id)
        .then(function (example) { return res.send(example); })
        .catch(next);
})
    .put('/:id', function (req, res, next) {
    console.log("PUT request for id " + req.params.id);
    Example_1.default
        .update(req.params.id, req.body)
        .then(function (example) { return res.send(example); })
        .catch(next);
})
    .delete('/:id', function (req, res, next) {
    console.log("DELETE request for id " + req.params.id);
    Example_1.default
        .delete(req.params.id)
        .then(function (example) { return res.send(example); })
        .catch(next);
});
