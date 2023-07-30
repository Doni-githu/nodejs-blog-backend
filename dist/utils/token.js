"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeId = exports.decodeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "doni_rich_men";
const encodeId = (_id) => {
    const token = jsonwebtoken_1.default.sign(_id, SECRET_KEY);
    return token;
};
exports.encodeId = encodeId;
const decodeToken = (token) => {
    const id = jsonwebtoken_1.default.decode(token, { complete: true }).payload;
    return id;
};
exports.decodeToken = decodeToken;
//# sourceMappingURL=token.js.map