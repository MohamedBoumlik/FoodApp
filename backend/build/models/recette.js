"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recette = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: false },
    prix: { type: Number, required: true },
    categorieId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Categorie' },
}, { timestamps: true });
// 3. Create a Model.
exports.Recette = (0, mongoose_1.model)('Recette', schema);
//# sourceMappingURL=recette.js.map