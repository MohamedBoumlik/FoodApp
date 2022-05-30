"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin = require("firebase-admin");
var serviceAccount = require("../../sdk.json");
const connection = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
exports.default = connection;
//# sourceMappingURL=firebase.js.map