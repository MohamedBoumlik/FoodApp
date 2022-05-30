"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const categorie_controller_1 = require("../controllers/categorie.controller");
const router = express_1.default.Router();
exports.router = router;
router.post('/add', categorie_controller_1.addCategorie);
router.get('/getAll', categorie_controller_1.getCategories);
//# sourceMappingURL=categorie.route.js.map