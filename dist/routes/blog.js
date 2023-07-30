"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    filename: (req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        cb(null, `blog-${(0, uuid_1.v4)()}-${uuid_1.v5.DNS}${ext}`);
    },
    destination: (req, file, cb) => {
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, '..', '..', 'public'))) {
            fs_1.default.mkdirSync(path_1.default.join(__dirname, '..', '..', 'public'));
        }
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, '..', '..', 'public', 'blogs'))) {
            fs_1.default.mkdirSync(path_1.default.join(__dirname, '..', '..', 'public', 'blogs'));
        }
        cb(null, path_1.default.join(__dirname, '..', '..', 'public', 'blogs'));
    }
});
const upload = (0, multer_1.default)({ storage });
router.post('/create', upload.single('file'), async (req, res) => {
    const blog = req.body;
});
exports.default = router;
//# sourceMappingURL=blog.js.map