"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var error_handling_1 = require("./middleware/error-handling");
var examples_1 = __importDefault(require("./controllers/examples"));
var documents_1 = __importDefault(require("./controllers/documents"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/v1/examples', examples_1.default);
app.use('/api/v1/documents', documents_1.default);
app.use(error_handling_1.handleNotFound);
app.use(error_handling_1.handleError);
exports.default = app;
