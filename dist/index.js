"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const blog_1 = __importDefault(require("./routes/blog"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use("/user", user_1.default);
app.use("/blog", blog_1.default);
function Run() {
    const PORT = process.env.PORT ?? 8000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        mongoose_1.default.connect('mongodb://localhost:27017')
            .then(() => console.log('Mongo DB is connected!!!'))
            .catch((error) => console.log(`Mongo DB could not connect, because ${error}`));
    });
}
Run();
//# sourceMappingURL=index.js.map