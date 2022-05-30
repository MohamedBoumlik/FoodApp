"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneMenu = exports.deleteMenu = exports.updateMenu = exports.getMenus = exports.createMenu = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const menu_1 = require("../models/menu");
const categorie_1 = require("../models/categorie");
// create Menu
const createMenu = async (req, res) => {
    // const data = req.body as IMenu
    try {
        const data = {
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            produits: req.body.produits,
            images: req.body.images
        };
        const categorieMenu = await categorie_1.Categorie.findOne({ nom: req.body.categorie });
        if (categorieMenu) {
            data.categorieId = categorieMenu.id;
        }
        const menu = await menu_1.Menu.create(data);
        await menu.save((err, Menu) => {
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
};
exports.createMenu = createMenu;
// get all Menus
const getMenus = (0, catchAsync_1.catchAsync)(async (req, res) => {
    try {
        const menu = await menu_1.Menu.find();
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
});
exports.getMenus = getMenus;
// get one Menu 
const getOneMenu = (0, catchAsync_1.catchAsync)(async (req, res) => {
    try {
        const Menus = await menu_1.Menu.findById(req.params.id);
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
});
exports.getOneMenu = getOneMenu;
// update Menu
const updateMenu = async (req, res) => {
    // const data = req.body as IMenu
    try {
        const data = {
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            produits: req.body.produits,
            images: req.body.images
        };
        const categorieMenu = await categorie_1.Categorie.findOne({ nom: req.body.categorie });
        if (categorieMenu) {
            data.categorieId = categorieMenu.id;
        }
        const menu = await menu_1.Menu.findByIdAndUpdate(req.params.id, data);
        await menu.save((err, menu) => {
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
};
exports.updateMenu = updateMenu;
// delete reccete
const deleteMenu = async (req, res) => {
    // const data = req.body as IMenu
    try {
        const deleteReccete = await menu_1.Menu.findByIdAndDelete(req.params.id);
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
};
exports.deleteMenu = deleteMenu;
//# sourceMappingURL=Menu.controller.js.map