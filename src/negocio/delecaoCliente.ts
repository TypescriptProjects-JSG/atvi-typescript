import Cliente from "../modelo/cliente";
import Delecao from "./delecao";
import Entrada from "../io/entrada";

export default class DelecaoClientes extends Delecao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nInício da deleção de cliente`);
        let cpfDelecao = this.entrada.receberTexto(`Por favor informe o CPF do cliente: `)    
        
        var chave = false
        this.clientes.forEach(cliente => {
            var cpf = cliente.getCpf.getValor
            if(cpf == cpfDelecao){
                console.log(`Você tem certeza da deleção do cadastro de: `+cliente.nome);
                console.log('1 - Sim');
                console.log('2 - Não');
                console.log('0 - Sair');
                console.log();
                chave = true

                var opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                switch (opcao) {
                    case 1:
                        for(var i=0; i<=this.clientes.length; ++i){
                            if(this.clientes[i].getCpf.getValor == cpf){
                                this.clientes.splice(i, 1)
                                console.log(`Deleção concluída :)\n`);
                                break
                            }
                        }
                    case 2:
                        console.log('Até logo :)\n');
                        break
                    case 0:
                        console.log('Até logo :)\n');
                        break;
                }
            }
        });
        if(chave == false){
            console.log(`Não existe ninguém com esse CPF :(\n`);
        }
    }
}