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
var MaisConsumidoGenero = /** @class */ (function (_super) {
    __extends(MaisConsumidoGenero, _super);
    function MaisConsumidoGenero(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        return _this;
    }
    MaisConsumidoGenero.prototype.listar = function () {
        var armazenarProdutosFeminino = [];
        var armazenarServicoFeminino = [];
        var armazenarProdutosMasculino = [];
        var armazenarServicoMasculino = [];
        this.cliente.filter(function (m) { return m.genero == 'Masculino'; }).map(function (i) {
            i.getProdutosConsumidos.forEach(function (pMen) {
                var nomeProduto = pMen.nome;
                var armazenarProduto = armazenarProdutosMasculino[pMen.nome] = (armazenarProdutosMasculino[pMen.nome] || 0) + 1;
                armazenarProdutosMasculino.push({
                    nomeProduto: nomeProduto,
                    quantidade: armazenarProduto
                });
            });
            i.getServicosConsumidos.forEach(function (sMen) {
                var nomeServico = sMen.nome;
                var armazenarServicos = armazenarServicoMasculino[sMen.nome] = (armazenarServicoMasculino[sMen.nome] || 0) + 1;
                armazenarServicoMasculino.push({
                    nomeServico: nomeServico,
                    quantidade: armazenarServicos
                });
            });
        });
        this.cliente.filter(function (m) { return m.genero == 'Feminino'; }).map(function (i) {
            i.getProdutosConsumidos.forEach(function (pFen) {
                var nomeProduto = pFen.nome;
                var armazenarProduto = armazenarProdutosFeminino[pFen.nome] = (armazenarProdutosFeminino[pFen.nome] || 0) + 1;
                armazenarProdutosFeminino.push({
                    nomeProduto: nomeProduto,
                    quantidade: armazenarProduto
                });
            });
            i.getServicosConsumidos.forEach(function (sFen) {
                var nomeServico = sFen.nome;
                var armazenarServicos = armazenarServicoFeminino[sFen.nome] = (armazenarServicoFeminino[sFen.nome] || 0) + 1;
                armazenarServicoFeminino.push({
                    nomeServico: nomeServico,
                    quantidade: armazenarServicos
                });
            });
        });
        var ordenacaoMasculinoProdutos = armazenarProdutosMasculino.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        var ordenacaoMasculinoServicos = armazenarServicoMasculino.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        var restricaoM = ordenacaoMasculinoProdutos.slice(0, 1);
        console.log();
        console.log("Produto mais consumido Masculino");
        restricaoM.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nomeProduto));
            console.log("Quantidade consumida ".concat(consumidos.quantidade));
        });
        restricaoM = ordenacaoMasculinoServicos.slice(0, 1);
        console.log();
        console.log("Servi\u00E7o mais consumido Masculino");
        restricaoM.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nomeServico));
            console.log("Quantidade consumida ".concat(consumidos.quantidade));
            console.log();
        });
        var ordenacaoFemininaProdutos = armazenarProdutosFeminino.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        var ordenacaoFemininaServicos = armazenarServicoFeminino.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        var restricaoF = ordenacaoFemininaProdutos.slice(0, 1);
        console.log();
        console.log("Produto mais consumido Feminino");
        restricaoF.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nomeProduto));
            console.log("Quantidade consumida ".concat(consumidos.quantidade));
        });
        restricaoF = ordenacaoFemininaServicos.slice(0, 1);
        console.log();
        console.log("Servico mais consumido Feminino");
        restricaoF.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nomeServico));
            console.log("Quantidade consumida ".concat(consumidos.quantidade));
            console.log();
        });
    };
    return MaisConsumidoGenero;
}(listagem_1.default));
exports.default = MaisConsumidoGenero;
