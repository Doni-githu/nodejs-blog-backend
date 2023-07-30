"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../utils/token");
const user_1 = __importDefault(require("../models/user"));
async function default_1(req, res) {
    if (!req.headers.authorization) {
        res.status(400).json({
            message: 'User is not authorization'
        });
        return;
    }
    const token = req.headers.authorization.replace('Token ', '');
    const id = (0, token_1.encodeId)(token);
    const user = await user_1.default.findById(id);
    console.log(user);
    req.user = user;
}
exports.default = default_1;
//# sourceMappingURL=user.js.map