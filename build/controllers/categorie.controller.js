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
exports.getCategories = exports.addCategorie = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const categorie_1 = require("../models/categorie");
// create Categorie
const addCategorie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const categorie = yield categorie_1.Categorie.create(data);
        yield categorie.save((err, categorie) => {
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
});
exports.addCategorie = addCategorie;
// get all Categories
const getCategories = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categorie_1.Categorie.find();
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
}));
exports.getCategories = getCategories;
//# sourceMappingURL=categorie.controller.js.map