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
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const db = () => __awaiter(void 0, void 0, void 0, function* () {
    const DATABASE_URL = process.env.DATABASE_URL;
    const connection = yield (0, mongoose_1.connect)(`${DATABASE_URL}`).catch((err) => {
        const message = `😵 Error connecting to database: ${err.message}`;
        console.error(message);
        process.exit(1);
    });
    return connection;
});
exports.db = db;
//# sourceMappingURL=connectDb.js.map