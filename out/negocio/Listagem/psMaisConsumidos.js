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
var psMaisConsumidos = /** @class */ (function (_super) {
    __extends(psMaisConsumidos, _super);
    function psMaisConsumidos(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        return _this;
    }
    psMaisConsumidos.prototype.listar = function () {
        var armazenarProdutos = [];
        this.cliente.map(function (i) {
            i.getProdutosConsumidos.forEach(function (i) {
                var nome = i.nome;
                var quantidade = armazenarProdutos[i.nome] = (armazenarProdutos[i.nome] || 0) + 1;
                armazenarProdutos.push({
                    quantidade: quantidade,
                    nome: nome,
                });
            });
        });
        var ordenacao = armazenarProdutos.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        var restricao = ordenacao.slice(0, 1);
        console.log("Produto mais consumido");
        restricao.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Quantidade consumida ".concat(consumidos.quantidade));
            console.log();
        });
        var armazenarServiço = [];
        this.cliente.map(function (i) { return i.getServicosConsumidos.forEach(function (i) {
            var nome = i.nome;
            var quantidade = armazenarServiço[i.nome] = (armazenarServiço[i.nome] || 0) + 1;
            armazenarServiço.push({
                quantidade: quantidade,
                nome: nome
            });
        }); });
        ordenacao = armazenarServiço.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        restricao = ordenacao.slice(0, 1);
        console.log("Servi\u00E7o mais Consumido");
        restricao.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Quantidade consumida ".concat(consumidos.quantidade));
            console.log();
        });
    };
    return psMaisConsumidos;
}(listagem_1.default));
exports.default = psMaisConsumidos;
