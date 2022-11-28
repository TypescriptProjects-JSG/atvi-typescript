import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

//Cliente
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import DelecaoClientes from "../negocio/delecaoCliente";
import UpdateClientes from "../negocio/updateClientes";
//Produto
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import DelecaoProdutos from "../negocio/delecaoProduto";
import UpdateProdutos from "../negocio/updateProduto";
//Serviço
import CadastroServico from "../negocio/cadastroServico";
import DelecaoServico from "../negocio/delecaoServico";
import ListagemServicos from "../negocio/listagemServicos";
import UpdateServicos from "../negocio/updateServico";
//Listagem
import ListagemConsumidor from "../negocio/Listagem/Consumidor";
import ListagemGenero from "../negocio/Listagem/Genero";
import psMaisConsumidos from "../negocio/Listagem/psMaisConsumidos";
import MaisConsumidoGenero from "../negocio/Listagem/MaisConsumidoGenero";
import MenosQuantidade from "../negocio/Listagem/MenosConsumidor";
import ComsumistaValor from "../negocio/Listagem/ConsumoValor";
import Geracao from "../negocio/geracao";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let geracao = new Geracao(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
geracao.geracao();
while (execucao) {
    console.log(`\n\n`);
    console.log(`Escolha uma das opções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Produto`);
    console.log(`3 - Serviço`);
    console.log(`4 - Listagem`);
    console.log(`0 - Sair`);
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            console.log(`Opções de clientes:`);
            console.log(`1 - Cadastrar cliente `);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Atualizar Cliente `);
            console.log(`4 - Deletar Cliente   `);
            console.log(`0 - Sair`);
            entrada = new Entrada()
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
                    cadastro.cadastrar();
                    break;
                case 2:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break;
                case 3:
                    let alteracao = new UpdateClientes(empresa.getClientes)
                    alteracao.update()
                    break;
                case 4:
                    let delecao = new DelecaoClientes(empresa.getClientes)
                    delecao.deletar()
                    break;
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 2:
            console.log(`Opções de produtos:`);
            console.log(`1 - Cadastrar Produtos`);
            console.log(`2 - Listar todos os Produtos`);
            console.log(`3 - Atualizar Produtos`);
            console.log(`4 - Deletar Produtos  `);
            console.log(`0 - Sair`);
            entrada = new Entrada()
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroProduto(empresa.getProdutos)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemProdutos(empresa.getProdutos)
                    listagem.listar()
                    break;
                case 3:
                    let alteracao = new UpdateProdutos(empresa.getProdutos)
                    alteracao.update()
                    break;
                case 4:
                    let delecao = new DelecaoProdutos(empresa.getProdutos)
                    delecao.deletar()
                    break;
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 3:
            console.log(`Opções de serviço:`);
            console.log(`1 - Cadastrar Serviços`);
            console.log(`2 - Listar todos os Serviços   `);
            console.log(`3 - Atualizar Serviço`);
            console.log(`4 - Deletar Serviço  `);
            console.log(`0 - Sair`);
            entrada = new Entrada()
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroServico(empresa.getServicos)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemServicos(empresa.getServicos)
                    listagem.listar()
                    break;
                case 3:
                    let alteracao = new UpdateServicos(empresa.getServicos)
                    alteracao.update()
                    break;
                case 4:
                    let delecao = new DelecaoServico(empresa.getServicos)
                    delecao.deletar()
                    break;
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 4:
            console.log(`Opções de listagem:`);
            console.log(`1 - Listar clientes que mais consumiram em quantidade`);
            console.log(`2 - Listar por generos`);
            console.log(`3 - Listar produtos e serviços mais consumidos`);
            console.log(`4 - Listar produtos e serviços mais consumidos por genero`);
            console.log(`5 - Listar clientes que menos consumiram`);
            console.log(`6 - Listar dos clietes que mais consumiram pem valor`);
            console.log(`0 - Sair`);
            entrada = new Entrada()
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let psMais = new ListagemConsumidor(empresa.getClientes)
                    psMais.listar()
                    break
                case 2:
                    let genero = new ListagemGenero(empresa.getClientes);
                    genero.listar();
                    break
                case 3:
                    let mais = new psMaisConsumidos(empresa.getClientes)
                    mais.listar()
                    break
                case 4:
                    let consumidoGenero = new MaisConsumidoGenero(empresa.getClientes)
                    consumidoGenero.listar()
                    break
                case 5:
                    let menos = new MenosQuantidade(empresa.getClientes)
                    menos.listar()
                    break
                case 6:
                    let valorConsumido = new ComsumistaValor(empresa.getClientes)
                    valorConsumido.listar()
                    break;
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}