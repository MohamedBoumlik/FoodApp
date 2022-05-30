"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categorie = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    nom: { type: String, required: true },
}, { timestamps: true });
// 3. Create a Model.
exports.Categorie = (0, mongoose_1.model)('Categorie', schema);
//# sourceMappingURL=categorie.js.map