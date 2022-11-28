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
var entrada_1 = __importDefault(require("../io/entrada"));
var update_1 = __importDefault(require("./update"));
var UpdateProdutos = /** @class */ (function (_super) {
    __extends(UpdateProdutos, _super);
    function UpdateProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateProdutos.prototype.update = function () {
        var _this = this;
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o de produtos");
        var nomeAtualizacao = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var chave = false;
        this.produtos.forEach(function (produto) {
            var nome = produto.nome;
            if (nome == nomeAtualizacao) {
                console.log("Produto: " + produto.nome);
                console.log("Valor: " + produto.preco);
                chave = true;
                console.log("\nO que voc\u00EA quer alterar?");
                console.log("1 - Nome");
                console.log("2 - Valor");
                console.log('0 - Sair');
                var opcao = _this.entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
                switch (opcao) {
                    case 1:
                        produto.nome = _this.entrada.receberTexto("Novo nome: ");
                        break;
                    case 2:
                        produto.preco = _this.entrada.receberNumero("Novo valor: ");
                        break;
                    case 0:
                        console.log('Até logo :)\n');
                        chave = false;
                        break;
                }
                if (chave) {
                    console.log("\nVoc\u00EA tem certeza da atualiza\u00E7\u00E3o");
                    console.log('1 - Sim');
                    console.log('2 - Não');
                    console.log('0 - Sair');
                    opcao = _this.entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
                    switch (opcao) {
                        case 1:
                            console.log("Atualiza\u00E7\u00E3o conclu\u00EDda :)\n");
                            break;
                        case 2:
                            console.log('Até logo :)\n');
                            break;
                        case 0:
                            console.log('Até logo :)\n');
                            break;
                    }
                }
            }
        });
        if (chave == false) {
            console.log("N\u00E3o existe nem um produto com esse nome :(\n");
        }
    };
    return UpdateProdutos;
}(update_1.default));
exports.default = UpdateProdutos;
