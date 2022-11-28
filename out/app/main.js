"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
//Cliente
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var delecaoCliente_1 = __importDefault(require("../negocio/delecaoCliente"));
var updateClientes_1 = __importDefault(require("../negocio/updateClientes"));
//Produto
var cadastroProduto_1 = __importDefault(require("../negocio/cadastroProduto"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var delecaoProduto_1 = __importDefault(require("../negocio/delecaoProduto"));
var updateProduto_1 = __importDefault(require("../negocio/updateProduto"));
//Serviço
var cadastroServico_1 = __importDefault(require("../negocio/cadastroServico"));
var delecaoServico_1 = __importDefault(require("../negocio/delecaoServico"));
var listagemServicos_1 = __importDefault(require("../negocio/listagemServicos"));
var updateServico_1 = __importDefault(require("../negocio/updateServico"));
//Listagem
var Consumidor_1 = __importDefault(require("../negocio/Listagem/Consumidor"));
var Genero_1 = __importDefault(require("../negocio/Listagem/Genero"));
var psMaisConsumidos_1 = __importDefault(require("../negocio/Listagem/psMaisConsumidos"));
var MaisConsumidoGenero_1 = __importDefault(require("../negocio/Listagem/MaisConsumidoGenero"));
var MenosConsumidor_1 = __importDefault(require("../negocio/Listagem/MenosConsumidor"));
var ConsumoValor_1 = __importDefault(require("../negocio/Listagem/ConsumoValor"));
var geracao_1 = __importDefault(require("../negocio/geracao"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
var geracao = new geracao_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
geracao.geracao();
while (execucao) {
    console.log("\n\n");
    console.log("Escolha uma das op\u00E7\u00F5es:");
    console.log("1 - Cliente");
    console.log("2 - Produto");
    console.log("3 - Servi\u00E7o");
    console.log("4 - Listagem");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            console.log("Op\u00E7\u00F5es de clientes:");
            console.log("1 - Cadastrar cliente ");
            console.log("2 - Listar todos os clientes");
            console.log("3 - Atualizar Cliente ");
            console.log("4 - Deletar Cliente   ");
            console.log("0 - Sair");
            entrada = new entrada_1.default();
            opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcao) {
                case 1:
                    var cadastro = new cadastroCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
                    cadastro.cadastrar();
                    break;
                case 2:
                    var listagem = new listagemClientes_1.default(empresa.getClientes);
                    listagem.listar();
                    break;
                case 3:
                    var alteracao = new updateClientes_1.default(empresa.getClientes);
                    alteracao.update();
                    break;
                case 4:
                    var delecao = new delecaoCliente_1.default(empresa.getClientes);
                    delecao.deletar();
                    break;
                case 0:
                    execucao = false;
                    console.log("At\u00E9 mais");
                    break;
                default:
                    console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
            }
            break;
        case 2:
            console.log("Op\u00E7\u00F5es de produtos:");
            console.log("1 - Cadastrar Produtos");
            console.log("2 - Listar todos os Produtos");
            console.log("3 - Atualizar Produtos");
            console.log("4 - Deletar Produtos  ");
            console.log("0 - Sair");
            entrada = new entrada_1.default();
            opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcao) {
                case 1:
                    var cadastro = new cadastroProduto_1.default(empresa.getProdutos);
                    cadastro.cadastrar();
                    break;
                case 2:
                    var listagem = new listagemProdutos_1.default(empresa.getProdutos);
                    listagem.listar();
                    break;
                case 3:
                    var alteracao = new updateProduto_1.default(empresa.getProdutos);
                    alteracao.update();
                    break;
                case 4:
                    var delecao = new delecaoProduto_1.default(empresa.getProdutos);
                    delecao.deletar();
                    break;
                case 0:
                    execucao = false;
                    console.log("At\u00E9 mais");
                    break;
                default:
                    console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
            }
            break;
        case 3:
            console.log("Op\u00E7\u00F5es de servi\u00E7o:");
            console.log("1 - Cadastrar Servi\u00E7os");
            console.log("2 - Listar todos os Servi\u00E7os   ");
            console.log("3 - Atualizar Servi\u00E7o");
            console.log("4 - Deletar Servi\u00E7o  ");
            console.log("0 - Sair");
            entrada = new entrada_1.default();
            opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcao) {
                case 1:
                    var cadastro = new cadastroServico_1.default(empresa.getServicos);
                    cadastro.cadastrar();
                    break;
                case 2:
                    var listagem = new listagemServicos_1.default(empresa.getServicos);
                    listagem.listar();
                    break;
                case 3:
                    var alteracao = new updateServico_1.default(empresa.getServicos);
                    alteracao.update();
                    break;
                case 4:
                    var delecao = new delecaoServico_1.default(empresa.getServicos);
                    delecao.deletar();
                    break;
                case 0:
                    execucao = false;
                    console.log("At\u00E9 mais");
                    break;
                default:
                    console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
            }
            break;
        case 4:
            console.log("Op\u00E7\u00F5es de listagem:");
            console.log("1 - Listar clientes que mais consumiram em quantidade");
            console.log("2 - Listar por generos");
            console.log("3 - Listar produtos e servi\u00E7os mais consumidos");
            console.log("4 - Listar produtos e servi\u00E7os mais consumidos por genero");
            console.log("5 - Listar clientes que menos consumiram");
            console.log("6 - Listar dos clietes que mais consumiram pem valor");
            console.log("0 - Sair");
            entrada = new entrada_1.default();
            opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcao) {
                case 1:
                    var psMais = new Consumidor_1.default(empresa.getClientes);
                    psMais.listar();
                    break;
                case 2:
                    var genero = new Genero_1.default(empresa.getClientes);
                    genero.listar();
                    break;
                case 3:
                    var mais = new psMaisConsumidos_1.default(empresa.getClientes);
                    mais.listar();
                    break;
                case 4:
                    var consumidoGenero = new MaisConsumidoGenero_1.default(empresa.getClientes);
                    consumidoGenero.listar();
                    break;
                case 5:
                    var menos = new MenosConsumidor_1.default(empresa.getClientes);
                    menos.listar();
                    break;
                case 6:
                    var valorConsumido = new ConsumoValor_1.default(empresa.getClientes);
                    valorConsumido.listar();
                    break;
                case 0:
                    execucao = false;
                    console.log("At\u00E9 mais");
                    break;
                default:
                    console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
            }
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
