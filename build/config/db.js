"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const db = async () => {
    const DATABASE_URL = process.env.DATABASE_URL;
    const connection = await (0, mongoose_1.connect)(`mongodb+srv://${DATABASE_URL}`).catch((err) => {
        const message = `😵 Error connecting to database: ${err.message}`;
        console.error(message);
        process.exit(1);
    });
    return connection;
};
exports.db = db;
//# sourceMappingURL=db.js.map