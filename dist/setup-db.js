"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pool_1 = __importDefault(require("./lib/utils/pool"));
var setup_1 = __importDefault(require("./data/setup"));
console.log('Setting up the database...');
setup_1.default(pool_1.default);
