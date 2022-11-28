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
var delecao_1 = __importDefault(require("./delecao"));
var entrada_1 = __importDefault(require("../io/entrada"));
var DelecaoProdutos = /** @class */ (function (_super) {
    __extends(DelecaoProdutos, _super);
    function DelecaoProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DelecaoProdutos.prototype.deletar = function () {
        var _this = this;
        console.log("\nIn\u00EDcio da dele\u00E7\u00E3o de produtos");
        var nomeDelecao = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var chave = false;
        this.produtos.forEach(function (produto) {
            var nome = produto.nome;
            if (nome == nomeDelecao) {
                console.log("Voc\u00EA tem certeza da dele\u00E7\u00E3o do produto: " + produto.nome);
                console.log('1 - Sim');
                console.log('2 - Não');
                console.log('0 - Sair');
                console.log();
                chave = true;
                var opcao = _this.entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
                switch (opcao) {
                    case 1:
                        for (var i = 0; i <= _this.produtos.length; ++i) {
                            if (_this.produtos[i].nome == nome) {
                                _this.produtos.splice(i, 1);
                                console.log("Dele\u00E7\u00E3o conclu\u00EDda :)\n");
                                break;
                            }
                        }
                    case 2:
                        console.log('Até logo :)\n');
                        break;
                    case 0:
                        console.log('Até logo :)\n');
                        break;
                }
            }
        });
        if (chave == false) {
            console.log("N\u00E3o existe nem um produto com esse nome :(\n");
        }
    };
    return DelecaoProdutos;
}(delecao_1.default));
exports.default = DelecaoProdutos;
