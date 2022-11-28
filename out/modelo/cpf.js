"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CPF = /** @class */ (function () {
    function CPF(valor) {
        this.valor = valor;
    }
    Object.defineProperty(CPF.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return CPF;
}());
exports.default = CPF;
