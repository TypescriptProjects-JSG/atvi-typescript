import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.servicos = servicos;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let genero = this.entrada.receberTexto(`Por favor informe o seu gênero: `);
        let cpf = new CPF(valor);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);

        valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        var data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        var partesData = data.split('/')
        var ano = new Number(partesData[2].valueOf()).valueOf()
        var mes = new Number(partesData[1].valueOf()).valueOf()
        var dia = new Number(partesData[0].valueOf()).valueOf()
        var dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor, dataEmissao);
        cliente.getRgs.push(rg);

        let novoRg = this.entrada.receberTexto(`Deseja informar outro rg? 1-Sim ou 2-Nao `);
        while (novoRg == '1') {
            valor = this.entrada.receberTexto(`Por favor informe o número do rg: `);
            data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
            partesData = data.split('/')
            ano = new Number(partesData[2].valueOf()).valueOf()
            mes = new Number(partesData[1].valueOf()).valueOf()
            dia = new Number(partesData[0].valueOf()).valueOf()
            dataEmissao = new Date(ano, mes, dia)
            rg = new RG(valor, dataEmissao);
            cliente.getRgs.push(rg);
            novoRg = this.entrada.receberTexto(`Deseja informar outro rg? 1-Sim ou 2-Nao `);
        }

        let tel = this.entrada.receberTexto(`Por favor informe o número do telefone, no padrão DDD NUMEROS: `)
        let partesTel = tel.split(' ')
        let ddd = new String(partesTel[0].valueOf()).valueOf()
        let num = new String(partesTel[1].valueOf()).valueOf()
        let telefone = new Telefone(ddd, num)
        cliente.getTelefones.push(telefone);
        let novoTel = this.entrada.receberTexto(`Deseja informar outro telefone? 1-Sim ou 2-Nao `);
        while (novoTel == '1') {
            tel = this.entrada.receberTexto(`Por favor informe o número do telefone, no padrão DDD NUMEROS: `)
            partesTel = tel.split(' ')
            ddd = new String(partesTel[0].valueOf()).valueOf()
            num = new String(partesTel[1].valueOf()).valueOf()
            telefone = new Telefone(ddd, num)
            cliente.getTelefones.push(telefone);
            novoTel = this.entrada.receberTexto(`Deseja informar outro telefone? 1-Sim ou 2-Nao `);
        }

        console.log(`Digite os produtos consumidos no padrão: \n x, y, z... ou apenas Produto x: `)
        nome = this.entrada.receberTexto(`Nome dos produtos: `)
        let sliceProdutos = nome.split(', ');
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            if (nomes.includes(sliceProdutos[index])) {
                let pegarPreco = this.produtos.filter(produto => produto.nome == nome).map(i => { return i.preco }).toString()
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            } else {
                let preco = this.entrada.receberNumero(`Defina o preço para "${sliceProdutos[index]}" R$`)
                let sliceProdutosPreco = preco.toString().split(', ')
                let produtoNovo = new Produto(sliceProdutos[index], Number(sliceProdutosPreco))
                this.produtos.push(produtoNovo)
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        
        console.log(`Digite os serviços consumidos no padrão: \nx, y, z... ou apenas Serviço x: `)
        nome = this.entrada.receberTexto(`Nome dos serviços: `)
        let sliceServico = nome.split(', ');
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            if (nomes.includes(sliceServico[index])) {
                let pegarPreco = this.servicos.filter(servico => servico.nome == nome).map(i => { return i.preco }).toString()
                let servicoNovo = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(servicoNovo)
            } else {
                let preco = this.entrada.receberNumero(`Defina o preço para "${sliceServico[index]}" R$`)
                let sliceServicoPreco = preco.toString().split(', ')
                let servicoNovo = new Servico(sliceServico[index], Number(sliceServicoPreco))
                this.servicos.push(servicoNovo)
                cliente.getServicosConsumidos.push(servicoNovo)
            }
        }

        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}