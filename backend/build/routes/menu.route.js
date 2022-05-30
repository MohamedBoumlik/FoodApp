"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
// const multer = require('multer');
const Menu_controller_1 = require("../controllers/Menu.controller");
const router = express_1.default.Router();
exports.router = router;
// Setting up multer as a middleware to grab photo uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('file');
router.post('/add', Menu_controller_1.createMenu);
router.get('/getAll', Menu_controller_1.getMenus);
router.get('/get/:id', Menu_controller_1.getOneMenu);
router.patch('/update/:id', Menu_controller_1.updateMenu);
router.delete('/delete/:id', Menu_controller_1.deleteMenu);
//# sourceMappingURL=menu.route.js.map