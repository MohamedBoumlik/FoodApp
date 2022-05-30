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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import 'dotenv/config';
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const connectDb_1 = require("./utils/connectDb");
const limiter_1 = require("./middlewares/limiter");
const index_1 = require("./routes/index");
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = (0, express_1.default)();
const corsOptions = {};
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use(limiter_1.limiter);
// All routes should live here.
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
    });
});
app.use('/api/categorie', index_1.categorie);
app.use('/api/recette', index_1.recette);
app.use('/api/menu', index_1.menu);
// listen to port you specified
app.listen(process.env.port, () => __awaiter(void 0, void 0, void 0, function* () {
    const { connection } = yield (0, connectDb_1.db)();
    console.log(`🚀 Server ready at: http://localhost:${process.env.port}`);
    console.log(`👋 Connected to database successfully : ${connection.name}`);
}));
//# sourceMappingURL=server.js.map