"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
// const multer = require('multer');
const recette_controller_1 = require("../controllers/recette.controller");
const router = express_1.default.Router();
exports.router = router;
// Setting up multer as a middleware to grab photo uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('file');
router.post('/add', recette_controller_1.createRecette);
router.get('/getAll', recette_controller_1.getRecettes);
router.get('/get/:id', recette_controller_1.getOneRecette);
router.patch('/update/:id', recette_controller_1.updateRecette);
router.delete('/delete/:id', recette_controller_1.deleteRecette);
//# sourceMappingURL=recette.route.js.map