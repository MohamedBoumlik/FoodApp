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
exports.getOneMenu = exports.deleteMenu = exports.updateMenu = exports.getMenus = exports.createMenu = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const menu_1 = require("../models/menu");
const categorie_1 = require("../models/categorie");
// create Menu
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body as IMenu
    try {
        const data = {
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            produits: req.body.produits,
            images: req.body.images
        };
        const categorieMenu = yield categorie_1.Categorie.findOne({ nom: req.body.categorie });
        if (categorieMenu) {
            data.categorieId = categorieMenu.id;
        }
        const menu = yield menu_1.Menu.create(data);
        yield menu.save((err, Menu) => {
            if (err) {
                res.status(500).send({ message: err });
            }
        });
        res.send({ message: "Menu was register successfully!" });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
});
exports.createMenu = createMenu;
// get all Menus
const getMenus = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield menu_1.Menu.find();
        res.status(200).json({
            menu,
        });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
}));
exports.getMenus = getMenus;
// get one Menu 
const getOneMenu = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Menus = yield menu_1.Menu.findById(req.params.id);
        res.status(200).json({
            Menus,
        });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
}));
exports.getOneMenu = getOneMenu;
// update Menu
const updateMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body as IMenu
    try {
        const data = {
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            produits: req.body.produits,
            images: req.body.images
        };
        const categorieMenu = yield categorie_1.Categorie.findOne({ nom: req.body.categorie });
        if (categorieMenu) {
            data.categorieId = categorieMenu.id;
        }
        const menu = yield menu_1.Menu.findByIdAndUpdate(req.params.id, data);
        yield menu.save((err, menu) => {
            if (err) {
                res.status(500).send({ message: err });
            }
        });
        res.send({ message: "Menu was updated successfully!" });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
});
exports.updateMenu = updateMenu;
// delete reccete
const deleteMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body as IMenu
    try {
        const deleteReccete = yield menu_1.Menu.findByIdAndDelete(req.params.id);
        if (!deleteReccete) {
            res.status(404).json({
                status: false,
                message: "Menu not found"
            });
        }
        else {
            res.status(200).json({
                status: true,
                message: "Menu was deleted successfully"
            });
        }
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
});
exports.deleteMenu = deleteMenu;
//# sourceMappingURL=Menu.controller.js.map