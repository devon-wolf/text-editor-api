"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pool_1 = __importDefault(require("../utils/pool"));
var Example = /** @class */ (function () {
    function Example(row) {
        var id = row.id, example_name = row.example_name, example_body = row.example_body;
        this.id = id;
        this.exampleName = example_name;
        this.exampleBody = example_body;
    }
    Example.create = function (_a) {
        var exampleName = _a.exampleName, exampleBody = _a.exampleBody;
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, pool_1.default.query("INSERT INTO examples (example_name, example_body)\n\t\t\tVALUES ($1, $2)\n\t\t\tRETURNING *", [
                            exampleName,
                            exampleBody
                        ])];
                    case 1:
                        rows = (_b.sent()).rows;
                        return [2 /*return*/, new Example(rows[0])];
                }
            });
        });
    };
    Example.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool_1.default.query('SELECT * FROM examples')];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, rows.map(function (row) { return new Example(row); })];
                }
            });
        });
    };
    Example.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool_1.default.query('SELECT * FROM examples WHERE id=$1', [id])];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, new Example(rows[0])];
                }
            });
        });
    };
    Example.update = function (id, _a) {
        var exampleName = _a.exampleName, exampleBody = _a.exampleBody;
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, pool_1.default.query("\n            UPDATE examples\n            SET\n            example_name=$1,\n            example_body=$2\n            WHERE id=$3\n            RETURNING *\n        ", [
                            exampleName,
                            exampleBody,
                            id
                        ])];
                    case 1:
                        rows = (_b.sent()).rows;
                        return [2 /*return*/, new Example(rows[0])];
                }
            });
        });
    };
    Example.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool_1.default.query('DELETE FROM examples WHERE id=$1 RETURNING *', [id])];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, new Example(rows[0])];
                }
            });
        });
    };
    return Example;
}());
exports.default = Example;