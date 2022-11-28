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
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var produto_1 = __importDefault(require("../modelo/produto"));
var rg_1 = __importDefault(require("../modelo/rg"));
var servico_1 = __importDefault(require("../modelo/servico"));
var telefone_1 = __importDefault(require("../modelo/telefone"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do CPF: ");
        var genero = this.entrada.receberTexto("Por favor informe o seu g\u00EAnero: ");
        var cpf = new cpf_1.default(valor);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do RG: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do RG, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var rg = new rg_1.default(valor, dataEmissao);
        cliente.getRgs.push(rg);
        var novoRg = this.entrada.receberTexto("Deseja informar outro rg? 1-Sim ou 2-Nao ");
        while (novoRg == '1') {
            valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do rg: ");
            data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
            partesData = data.split('/');
            ano = new Number(partesData[2].valueOf()).valueOf();
            mes = new Number(partesData[1].valueOf()).valueOf();
            dia = new Number(partesData[0].valueOf()).valueOf();
            dataEmissao = new Date(ano, mes, dia);
            rg = new rg_1.default(valor, dataEmissao);
            cliente.getRgs.push(rg);
            novoRg = this.entrada.receberTexto("Deseja informar outro rg? 1-Sim ou 2-Nao ");
        }
        var tel = this.entrada.receberTexto("Por favor informe o n\u00FAmero do telefone, no padr\u00E3o DDD NUMEROS: ");
        var partesTel = tel.split(' ');
        var ddd = new String(partesTel[0].valueOf()).valueOf();
        var num = new String(partesTel[1].valueOf()).valueOf();
        var telefone = new telefone_1.default(ddd, num);
        cliente.getTelefones.push(telefone);
        var novoTel = this.entrada.receberTexto("Deseja informar outro telefone? 1-Sim ou 2-Nao ");
        while (novoTel == '1') {
            tel = this.entrada.receberTexto("Por favor informe o n\u00FAmero do telefone, no padr\u00E3o DDD NUMEROS: ");
            partesTel = tel.split(' ');
            ddd = new String(partesTel[0].valueOf()).valueOf();
            num = new String(partesTel[1].valueOf()).valueOf();
            telefone = new telefone_1.default(ddd, num);
            cliente.getTelefones.push(telefone);
            novoTel = this.entrada.receberTexto("Deseja informar outro telefone? 1-Sim ou 2-Nao ");
        }
        console.log("Digite os produtos consumidos no padr\u00E3o: \n x, y, z... ou apenas Produto x: ");
        nome = this.entrada.receberTexto("Nome dos produtos: ");
        var sliceProdutos = nome.split(', ');
        for (var index = 0; index < sliceProdutos.length; index++) {
            var nomes = this.produtos.map(function (i) { return (i.nome); });
            if (nomes.includes(sliceProdutos[index])) {
                var pegarPreco = this.produtos.filter(function (produto) { return produto.nome == nome; }).map(function (i) { return i.preco; }).toString();
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
            else {
                var preco = this.entrada.receberNumero("Defina o pre\u00E7o para \"".concat(sliceProdutos[index], "\" R$"));
                var sliceProdutosPreco = preco.toString().split(', ');
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(sliceProdutosPreco));
                this.produtos.push(produtoNovo);
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        }
        console.log("Digite os servi\u00E7os consumidos no padr\u00E3o: \nx, y, z... ou apenas Servi\u00E7o x: ");
        nome = this.entrada.receberTexto("Nome dos servi\u00E7os: ");
        var sliceServico = nome.split(', ');
        for (var index = 0; index < sliceServico.length; index++) {
            var nomes = this.servicos.map(function (i) { return (i.nome); });
            if (nomes.includes(sliceServico[index])) {
                var pegarPreco = this.servicos.filter(function (servico) { return servico.nome == nome; }).map(function (i) { return i.preco; }).toString();
                var servicoNovo = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(servicoNovo);
            }
            else {
                var preco = this.entrada.receberNumero("Defina o pre\u00E7o para \"".concat(sliceServico[index], "\" R$"));
                var sliceServicoPreco = preco.toString().split(', ');
                var servicoNovo = new servico_1.default(sliceServico[index], Number(sliceServicoPreco));
                this.servicos.push(servicoNovo);
                cliente.getServicosConsumidos.push(servicoNovo);
            }
        }
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
