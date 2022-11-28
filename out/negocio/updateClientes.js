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
var UpdateClientes = /** @class */ (function (_super) {
    __extends(UpdateClientes, _super);
    function UpdateClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateClientes.prototype.update = function () {
        var _this = this;
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o de cliente");
        var cpfDelecao = this.entrada.receberTexto("Por favor informe o CPF do cliente: ");
        var chave = false;
        this.clientes.forEach(function (cliente) {
            var cpf = cliente.getCpf.getValor;
            if (cpf == cpfDelecao) {
                console.log("Nome: " + cliente.nome);
                console.log("Nome social: " + cliente.nomeSocial);
                console.log("RGs':");
                for (var k = 0; (cliente.getRgs.length) > k; ++k) {
                    console.log("".concat(k + 1, "\u00BA: ") + cliente.getRgs[k].getValor);
                }
                console.log("Telefones:");
                for (var k = 0; (cliente.getTelefones.length) > k; ++k) {
                    console.log("".concat(k + 1, "\u00BA: ") + cliente.getTelefones[k].getValor);
                }
                chave = true;
                console.log("\nO que voc\u00EA quer alterar?");
                console.log("1 - Nome");
                console.log("2 - Nome social");
                console.log("3 - RGs");
                console.log("4 - Telefones");
                console.log('0 - Sair');
                var opcao = _this.entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
                switch (opcao) {
                    case 1:
                        cliente.nome = _this.entrada.receberTexto("Novo nome: ");
                        break;
                    case 2:
                        cliente.nomeSocial = _this.entrada.receberTexto("Novo nome social: ");
                        break;
                    case 3:
                        console.log("\nQual voc\u00EA quer alterar?");
                        for (var k = 0; (cliente.getRgs.length) > k; ++k) {
                            console.log("".concat(k + 1, " - ") + cliente.getRgs[k].getValor);
                        }
                        opcao = _this.entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
                        cliente.getRgs[opcao - 1].mudaRG(_this.entrada.receberTexto("Novo RG: "));
                        break;
                    case 4:
                        console.log("\nQual voc\u00EA quer alterar?");
                        for (var k = 0; (cliente.getTelefones.length) > k; ++k) {
                            console.log("".concat(k + 1, " - ") + cliente.getTelefones[k].getValor);
                        }
                        opcao = _this.entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
                        var d = _this.entrada.receberTexto("Novo DDD: ");
                        var n = _this.entrada.receberTexto("Novo n\u00FAmero: ");
                        cliente.getTelefones[opcao - 1].mudaTel(d, n);
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
            console.log("N\u00E3o existe ningu\u00E9m com esse CPF :(\n");
        }
    };
    return UpdateClientes;
}(update_1.default));
exports.default = UpdateClientes;
