"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = exports.recette = exports.categorie = exports.compagnie = void 0;
var recette_route_1 = require("./recette.route");
Object.defineProperty(exports, "compagnie", { enumerable: true, get: function () { return recette_route_1.router; } });
var categorie_route_1 = require("./categorie.route");
Object.defineProperty(exports, "categorie", { enumerable: true, get: function () { return categorie_route_1.router; } });
var recette_route_2 = require("./recette.route");
Object.defineProperty(exports, "recette", { enumerable: true, get: function () { return recette_route_2.router; } });
var menu_route_1 = require("./menu.route");
Object.defineProperty(exports, "menu", { enumerable: true, get: function () { return menu_route_1.router; } });
//# sourceMappingURL=index.js.map