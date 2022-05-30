"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.addCategorie = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const categorie_1 = require("../models/categorie");
// create Categorie
const addCategorie = async (req, res) => {
    const data = req.body;
    try {
        const categorie = await categorie_1.Categorie.create(data);
        await categorie.save((err, categorie) => {
            if (err) {
                res.status(500).send({ message: err });
            }
        });
        res.send({ message: "categorie was register successfully!" });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
};
exports.addCategorie = addCategorie;
// get all Categories
const getCategories = (0, catchAsync_1.catchAsync)(async (req, res) => {
    try {
        const categories = await categorie_1.Categorie.find();
        res.status(200).json({
            categories,
        });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
});
exports.getCategories = getCategories;
//# sourceMappingURL=categorie.controller.js.map