import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class Geracao {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.servicos = servicos;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public geracao(): void {
        const clientes = [
            {
                nome: 'Agata',
                nomeSocial: 'Agata',
                cpf: '1111111111',
                dataEmissaoCpf: '01/01/2000',
                genero: 'Feminino',
                rg: '1111111111000',
                dataEmissao:'01/01/2000',
                telefoneDDD: '65',
                telefoneNumero: '1111111111'
            },
            {
                nome: 'Alex',
                nomeSocial: 'Alex',
                cpf: '222222222',
                dataEmissaoCpf: '14/05/2005',
                genero: 'Masculino',
                rg: '222222222000',
                dataEmissao:'14/05/2005',
                telefoneDDD: '122',
                telefoneNumero: '222222222'
            },
            {
                nome: 'Carlos',
                nomeSocial: 'Carlos',
                cpf: '3333333333',
                dataEmissaoCpf: '02/12/1987',
                genero: 'Masculino',
                rg: '',
                dataEmissao:'',
                telefoneDDD: '',
                telefoneNumero: ''
            },
            {
                nome: 'Antônia',
                nomeSocial: 'Antônia',
                cpf: '4444444444',
                dataEmissaoCpf: '12/08/2000',
                genero: 'Feminino',
                rg: '4444444444000',
                dataEmissao:'12/08/2000',
                telefoneDDD: '11',
                telefoneNumero: '4444444444'
            },
            {
                nome: 'Marcia',
                nomeSocial: 'Marcia',
                cpf: '5555555555',
                dataEmissaoCpf: '27/04/1980',
                genero: 'Feminino',
                rg: '5555555555000',
                dataEmissao:'27/04/1980',
                telefoneDDD: '43',
                telefoneNumero: '5555555555'
            },
            {
                nome: 'Felipe',
                nomeSocial: 'Felipe',
                cpf: '6666666666',
                dataEmissaoCpf: '29/05/1999',
                genero: 'Masculino',
                rg: '6666666666000',
                dataEmissao:'29/05/1999',
                telefoneDDD: '31',
                telefoneNumero: '6666666666'
            },
            {
                nome: 'Roberto',
                nomeSocial: 'Roberto',
                cpf: '7777777777',
                dataEmissaoCpf: '23/02/2002',
                genero: 'Masculino',
                rg: '7777777777000',
                dataEmissao:'23/02/2002',
                telefoneDDD: '47',
                telefoneNumero: '7777777777'
            },
            {
                nome: 'Thalles',
                nomeSocial: 'Thalles',
                cpf: '8888888888',
                dataEmissaoCpf: '14/07/2001',
                genero: 'Masculino',
                rg: '8888888888000',
                dataEmissao:'14/07/2001',
                telefoneDDD: '74',
                telefoneNumero: '8888888888'
            },
            {
                nome: 'Jefferson',
                nomeSocial: 'Jefferson',
                cpf: '999999999',
                dataEmissaoCpf: '11/02/1999',
                genero: 'Masculino',
                rg: '999999999000',
                dataEmissao:'11/02/1999',
                telefoneDDD: '63',
                telefoneNumero: '999999999'
            },
            {
                nome: 'Gerson',
                nomeSocial: 'Gerson',
                cpf: '2111111111',
                dataEmissaoCpf: '20/01/2000',
                genero: 'Masculino',
                rg: '2111111111000',
                dataEmissao:'20/01/2000',
                telefoneDDD: '65',
                telefoneNumero: '2111111111'
            },
            {
                nome: 'Walter',
                nomeSocial: 'Walter',
                cpf: '31111111111',
                dataEmissaoCpf: '07/03/2002',
                genero: 'Masculino',
                rg: '31111111111000',
                dataEmissao:'07/03/2002',
                telefoneDDD: '74',
                telefoneNumero: '31111111111'
            },
            {
                nome: 'Renato',
                nomeSocial: 'Renato',
                cpf: '41111111111',
                dataEmissaoCpf: '05/09/1989',
                genero: 'Masculino',
                rg: '41111111111000',
                dataEmissao:'05/09/1989',
                telefoneDDD: '64',
                telefoneNumero: '41111111111'
            },
            {
                nome: 'Mario',
                nomeSocial: 'Mario',
                cpf: '51111111111',
                dataEmissaoCpf: '09/09/1999',
                genero: 'Masculino',
                rg: '51111111111000',
                dataEmissao:'09/09/1999',
                telefoneDDD: '31',
                telefoneNumero: '51111111111'
            },
            {
                nome: 'Marcio',
                nomeSocial: 'Marcio',
                cpf: '61111111111',
                dataEmissaoCpf: '10/10/2010',
                genero: 'Masculino',
                rg: '61111111111000',
                dataEmissao:'10/10/2010',
                telefoneDDD: '45',
                telefoneNumero: '61111111111'
            },
            {
                nome: 'Marcos',
                nomeSocial: 'Marcos',
                cpf: '711111111111',
                dataEmissaoCpf: '20/12/2012',
                genero: 'Feminino',
                rg: '711111111111000',
                dataEmissao:'20/12/2012',
                telefoneDDD: '85',
                telefoneNumero: '711111111111'
            },
            {
                nome: 'Matheus',
                nomeSocial: 'Matheus',
                cpf: '81111111111',
                dataEmissaoCpf: '02/02/1982',
                genero: 'Feminino',
                rg: '81111111111000',
                dataEmissao:'02/02/1982',
                telefoneDDD: '95',
                telefoneNumero: '81111111111'
            },
            {
                nome: 'João',
                nomeSocial: 'João',
                cpf: '9111111111',
                dataEmissaoCpf: '19/01/2004',
                genero: 'Feminino',
                rg: '9111111111000',
                dataEmissao:'19/01/2004',
                telefoneDDD: '75',
                telefoneNumero: '9111111111'
            },
            {
                nome: 'Lucas',
                nomeSocial: 'Lucas',
                cpf: '1011111111',
                dataEmissaoCpf: '04/11/1998',
                genero: 'Feminino',
                rg: '1011111111000',
                dataEmissao:'04/11/1998',
                telefoneDDD: '53',
                telefoneNumero: '1011111111'
            },
            {
                nome: 'Barnabé',
                nomeSocial: 'Barnabé',
                cpf: '1211111111',
                dataEmissaoCpf: '01/05/2000',
                genero: 'Feminino',
                rg: '1211111111000',
                dataEmissao:'01/05/2000',
                telefoneDDD: '97',
                telefoneNumero: '1211111111'
            },
            {
                nome: 'Otávio',
                nomeSocial: 'Otávio',
                cpf: '1311111111',
                dataEmissaoCpf: '28/08/2008',
                genero: 'Feminino',
                rg: '1311111111000',
                dataEmissao:'28/08/2008',
                telefoneDDD: '46',
                telefoneNumero: '1311111111'
            },
            {
                nome: 'Pedro',
                nomeSocial: 'Pedro',
                cpf: '1411111111',
                dataEmissaoCpf: '12/11/2010',
                genero: 'Masculino',
                rg: '1411111111000',
                dataEmissao:'12/11/2010',
                telefoneDDD: '73',
                telefoneNumero: '1411111111'
            },
            {
                nome: 'Paulo',
                nomeSocial: 'Paulo',
                cpf: '1511111111',
                dataEmissaoCpf: '22/05/2015',
                genero: 'Masculino',
                rg: '1511111111000',
                dataEmissao:'22/05/2015',
                telefoneDDD: '51',
                telefoneNumero: '1511111111'
            },
            {
                nome: 'Kevin',
                nomeSocial: 'Kevin',
                cpf: '1611111111',
                dataEmissaoCpf: '23/05/2004',
                genero: 'Feminino',
                rg: '1611111111000',
                dataEmissao:'23/05/2004',
                telefoneDDD: '13',
                telefoneNumero: '1611111111'
            },
            {
                nome: 'Geraldo',
                nomeSocial: 'Geraldo',
                cpf: '1711111111',
                dataEmissaoCpf: '10/07/1999',
                genero: 'Feminino',
                rg: '1711111111000',
                dataEmissao:'10/07/1999',
                telefoneDDD: '52',
                telefoneNumero: '1711111111'
            },
            {
                nome: 'Eli',
                nomeSocial: 'Eli',
                cpf: '1811111111',
                dataEmissaoCpf: '08/01/1989',
                genero: 'Feminino',
                rg: '1811111111000',
                dataEmissao:'08/01/1989',
                telefoneDDD: '84',
                telefoneNumero: '1811111111'
            },
            {
                nome: 'Lourival',
                nomeSocial: 'Lourival',
                cpf: '1911111111',
                dataEmissaoCpf: '03/10/2000',
                genero: 'Masculino',
                rg: '1911111111000',
                dataEmissao:'03/10/2000',
                telefoneDDD: '58',
                telefoneNumero: '1911111111'
            },
            {
                nome: 'Vinicius',
                nomeSocial: 'Vinicius',
                cpf: '2011111111',
                dataEmissaoCpf: '09/11/2005',
                genero: 'Feminino',
                rg: '2011111111000',
                dataEmissao:'09/11/2005',
                telefoneDDD: '62',
                telefoneNumero: '2011111111'
            },
            {
                nome: 'Thais',
                nomeSocial: 'Thais',
                cpf: '2211111111',
                dataEmissaoCpf: '17/02/1999',
                genero: 'Feminino',
                rg: '2211111111000',
                dataEmissao:'17/02/1999',
                telefoneDDD: '67',
                telefoneNumero: '2211111111'
            },
            {
                nome: 'Alberto',
                nomeSocial: 'Alberto',
                cpf: '2311111111',
                dataEmissaoCpf: '15/06/1980',
                genero: 'Masculino',
                rg: '2311111111000',
                dataEmissao:'15/06/1980',
                telefoneDDD: '46',
                telefoneNumero: '2311111111'
            },
            {
                nome: 'Reinaldo',
                nomeSocial: 'Reinaldo',
                cpf: '2411111111',
                dataEmissaoCpf: '02/04/2006',
                genero: 'Masculino',
                rg: '2411111111000',
                dataEmissao:'02/04/2006',
                telefoneDDD: '231',
                telefoneNumero: '2411111111'
            }
        ]
        const produtos = [
            {
                produto: 'Pinça',
                valor: 20.00
            },
            {
                produto: 'Tesoura',
                valor: 20.00
            },
            {
                produto: 'Maquina',
                valor: 60.00
            },
            {
                produto: 'Secador',
                valor: 20.00
            },
            {
                produto: 'Pente',
                valor: 10.00
            },
            {
                produto: 'Gel',
                valor: 8.00
            },
            {
                produto: 'Creme de Cabelo',
                valor: 10.00
            },
            {
                produto: 'Toalha',
                valor: 12.00
            },
            {
                produto: 'Esmalte',
                valor: 5.00
            },
            {
                produto: 'Kit de Maquiagem',
                valor: 20.00
            },
            {
                produto: 'Shampoo',
                valor: 9.00
            },
            {
                produto: 'Baby liss',
                valor: 35.00
            },
        ]
        const servicos = [
            {
                servico: 'Corte de Cabelo Masculino',
                valor: 20.00
            },
            {
                servico: 'Corte de Cabelo Feminino',
                valor: 30.00
            },
            {
                servico: 'Corte de Barba',
                valor: 10.00
            },
            {
                servico: 'Hidratação',
                valor: 10.00
            },
            {
                servico: 'Pintar cabelo',
                valor: 17.00
            },
            {
                servico: 'Tratamento de fios',
                valor: 20.00
            },
            {
                servico: 'Lavar Cabelo',
                valor: 12.00
            },
            {
                servico: 'Arrumar cabelo',
                valor: 10.00
            },
            {
                servico: 'Unha',
                valor: 15.00
            },
            {
                servico: 'Tratamento de Pele',
                valor: 25.00
            },
        ]
        
        var aleatorio = [1,2,0,11,7,6,3,9,12,4]

        for (var k in clientes){
            let cpf = new CPF(clientes[k].cpf);
            let adicionandoClientes = new Cliente(clientes[k].nome, clientes[k].nomeSocial, cpf, clientes[k].genero)

            var partesData = clientes[k].dataEmissao.split('/')
            var ano = new Number(partesData[2]).valueOf()
            var mes = new Number(partesData[1]).valueOf()
            var dia = new Number(partesData[0]).valueOf()
            var dataEmissao = new Date(ano, mes, dia)
            let rg = new RG(clientes[k].rg, dataEmissao);
            adicionandoClientes.getRgs.push(rg);

            let telefone = new Telefone(clientes[k].telefoneDDD, clientes[k].telefoneNumero)
            adicionandoClientes.getTelefones.push(telefone);
            
            for(var w = (aleatorio[Math.floor(Number(k)/3)]); w >=0; --w){
                var pro = Math.floor(Math.random()*10);
                var ser = Math.floor(Math.random()*10);

                let nomes = this.produtos.map(i => (i.nome))
                if (nomes.includes(produtos[pro].produto)) {
                    let produtoNovo = new Produto(produtos[pro].produto, produtos[pro].valor)
                    adicionandoClientes.getProdutosConsumidos.push(produtoNovo)
                } else {
                    let produtoNovo = new Produto(produtos[pro].produto, produtos[pro].valor)
                    this.produtos.push(produtoNovo)
                    adicionandoClientes.getProdutosConsumidos.push(produtoNovo)
                }
                nomes = this.servicos.map(i => (i.nome))
                if (nomes.includes(servicos[ser].servico)) {
                    let servicoNovo = new Servico(servicos[ser].servico, servicos[ser].valor)
                    adicionandoClientes.getServicosConsumidos.push(servicoNovo)
                } else {
                    let servicoNovo = new Servico(servicos[ser].servico, servicos[ser].valor)
                    this.servicos.push(servicoNovo)
                    adicionandoClientes.getServicosConsumidos.push(servicoNovo)
                }               
        }
        this.clientes.push(adicionandoClientes)
    }
}}