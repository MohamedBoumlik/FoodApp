"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneRecette = exports.deleteRecette = exports.updateRecette = exports.getRecettes = exports.createRecette = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const recette_1 = require("../models/recette");
const categorie_1 = require("../models/categorie");
// create Recette
const createRecette = async (req, res) => {
    // const data = req.body as IRecette
    try {
        const data = {
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            images: req.body.images
        };
        // const categorieRecette= await Categorie.findOne({nom:req.body.categorie});
        // if( categorieRecette){
        //  data.categorieId=categorieRecette.id;
        // }    
        const recette = await recette_1.Recette.create(data);
        await recette.save((err, recette) => {
            if (err) {
                res.status(500).send({ message: err });
            }
        });
        res.status(200).send({ message: "Recette was register successfully!" });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
};
exports.createRecette = createRecette;
// get all Recettes
const getRecettes = (0, catchAsync_1.catchAsync)(async (req, res) => {
    try {
        recette_1.Recette.find()
            .then(data => {
            res.status(200).json(data);
        })
            .catch(err => {
            console.log(err);
        });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
});
exports.getRecettes = getRecettes;
// get one recette 
const getOneRecette = (0, catchAsync_1.catchAsync)(async (req, res) => {
    try {
        const Recettes = await recette_1.Recette.findById(req.params.id);
        res.status(200).json({
            Recettes,
        });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
});
exports.getOneRecette = getOneRecette;
// update Recette
const updateRecette = async (req, res) => {
    // const data = req.body as IRecette
    try {
        const data = {
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            images: req.body.images
        };
        const categorieRecette = await categorie_1.Categorie.findOne({ nom: req.body.categorie });
        if (categorieRecette) {
            data.categorieId = categorieRecette.id;
        }
        const recette = await recette_1.Recette.findByIdAndUpdate(req.params.id, data);
        await recette.save((err, recette) => {
            if (err) {
                res.status(500).send({ message: err });
            }
        });
        res.send({ message: "Recette was updated successfully!" });
    }
    catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
};
exports.updateRecette = updateRecette;
// delete reccete
const deleteRecette = async (req, res) => {
    // const data = req.body as IRecette
    try {
        const deleteReccete = await recette_1.Recette.findByIdAndDelete(req.params.id);
        if (!deleteReccete) {
            res.status(404).json({
                status: false,
                message: "Recette not found"
            });
        }
        else {
            res.status(200).json({
                status: true,
                message: "Recette was deleted successfully"
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
exports.deleteRecette = deleteRecette;
//# sourceMappingURL=recette.controller.js.map