"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    factureId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Facture' },
}, { timestamps: true });
// 3. Create a Model.
exports.Action = (0, mongoose_1.model)('Action', schema);
//# sourceMappingURL=action.js.map