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
var DelecaoServico = /** @class */ (function (_super) {
    __extends(DelecaoServico, _super);
    function DelecaoServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DelecaoServico.prototype.deletar = function () {
        var _this = this;
        console.log("\nIn\u00EDcio da dele\u00E7\u00E3o de servi\u00E7os");
        var nomeDelecao = this.entrada.receberTexto("Por favor informe o nome do servi\u00E7o: ");
        var chave = false;
        this.servicos.forEach(function (servico) {
            var nome = servico.nome;
            if (nome == nomeDelecao) {
                console.log("Voc\u00EA tem certeza da dele\u00E7\u00E3o do servi\u00E7o: " + servico.nome);
                console.log('1 - Sim');
                console.log('2 - Não');
                console.log('0 - Sair');
                console.log();
                chave = true;
                var opcao = _this.entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
                switch (opcao) {
                    case 1:
                        for (var i = 0; i <= _this.servicos.length; ++i) {
                            if (_this.servicos[i].nome == nome) {
                                _this.servicos.splice(i, 1);
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
            console.log("N\u00E3o existe nem um servi\u00E7o com esse nome :(\n");
        }
    };
    return DelecaoServico;
}(delecao_1.default));
exports.default = DelecaoServico;
