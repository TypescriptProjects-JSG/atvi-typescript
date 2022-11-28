"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var ListagemGenero = /** @class */ (function (_super) {
    __extends(ListagemGenero, _super);
    function ListagemGenero(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemGenero.prototype.listar = function () {
        console.log("\nClientes do sexo Masculino");
        this.clientes.filter(function (m) { return m.genero == 'Masculino'; }).map(function (cliente) { return console.log("Nome: ".concat(cliente.nome)); }).toString();
        console.log("\nClientes do sexo Feminino");
        this.clientes.filter(function (m) { return m.genero == 'Feminino'; }).map(function (cliente) { return console.log("Nome: ".concat(cliente.nome)); }).toString();
        console.log();
    };
    return ListagemGenero;
}(listagem_1.default));
exports.default = ListagemGenero;
