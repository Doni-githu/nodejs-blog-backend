"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../utils/token");
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_2 = __importDefault(require("../middlewares/user"));
const router = (0, express_1.Router)();
router.post('/register', async (req, res) => {
    const user = req.body;
    const same = await user_1.default.findOne({ email: user.email });
    if (same) {
        res.status(400).json({ message: 'This email are ready using' });
        return;
    }
    const hashPassword = await bcrypt_1.default.hash(user.password, 10);
    const editUser = {
        ...user,
        password: hashPassword
    };
    const createdUser = await user_1.default.create(editUser);
    const token = (0, token_1.decodeToken)(String(createdUser._id));
    res.status(200).json({
        user: createdUser,
        token
    });
});
router.post('/login', async (req, res) => {
    const user = req.body;
    const existUser = await user_1.default.findOne({ email: user.email });
    if (!existUser) {
        res.status(400).json({
            message: 'User is not exist'
        });
        return;
    }
    const comparePassword = await bcrypt_1.default.compare(existUser.password, user.password);
    if (!comparePassword) {
        res.status(400).json({
            message: 'Password is wrong'
        });
        return;
    }
    const token = (0, token_1.encodeId)(String(existUser._id));
    res.status(200).json({
        token,
        user: existUser
    });
});
router.get('/', user_2.default, async (req, res) => {
    res.status(200).json({ user: req.user });
});
exports.default = router;
//# sourceMappingURL=user.js.map