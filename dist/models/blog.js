"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    src: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
});
const Blog = (0, mongoose_1.model)("Blog", BlogSchema);
exports.default = Blog;
//# sourceMappingURL=blog.js.map