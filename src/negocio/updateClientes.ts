import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Update from "./update";

export default class UpdateClientes extends Update {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nInício da atualização de cliente`);
        let cpfDelecao = this.entrada.receberTexto(`Por favor informe o CPF do cliente: `)    
        
        var chave = false
        this.clientes.forEach(cliente => {
            var cpf = cliente.getCpf.getValor
            if(cpf == cpfDelecao){
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`RGs':`);
                for(let k = 0; (cliente.getRgs.length)>k; ++k){
                    console.log(`${k+1}º: ` + cliente.getRgs[k].getValor);
                }
                console.log(`Telefones:`);
                for(let k = 0; (cliente.getTelefones.length)>k; ++k){
                    console.log(`${k+1}º: ` + cliente.getTelefones[k].getValor);
                }
                chave = true
                console.log(`\nO que você quer alterar?`);
                console.log(`1 - Nome`);
                console.log(`2 - Nome social`);
                console.log(`3 - RGs`);
                console.log(`4 - Telefones`);
                console.log('0 - Sair');
                var opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                
                switch (opcao) {
                    case 1:
                        cliente.nome = this.entrada.receberTexto(`Novo nome: `)
                        break
                    case 2:
                        cliente.nomeSocial = this.entrada.receberTexto(`Novo nome social: `)
                        break
                    case 3:
                        console.log(`\nQual você quer alterar?`);
                        for(let k = 0; (cliente.getRgs.length)>k; ++k){
                            console.log(`${k+1} - ` + cliente.getRgs[k].getValor);
                        }
                        opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                        cliente.getRgs[opcao-1].mudaRG(this.entrada.receberTexto(`Novo RG: `))
                        break
                    case 4:
                        console.log(`\nQual você quer alterar?`);
                        for(let k = 0; (cliente.getTelefones.length)>k; ++k){
                            console.log(`${k+1} - ` + cliente.getTelefones[k].getValor);
                        }
                        opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                        var d = this.entrada.receberTexto(`Novo DDD: `)
                        var n = this.entrada.receberTexto(`Novo número: `)
                        cliente.getTelefones[opcao-1].mudaTel(d,n)
                        break
                    case 0:
                        console.log('Até logo :)\n');
                        chave = false
                        break;
                }
                if(chave){
                    console.log(`\nVocê tem certeza da atualização`);
                    console.log('1 - Sim');
                    console.log('2 - Não');
                    console.log('0 - Sair');
                    opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                    
                    switch (opcao) {
                        case 1:
                            console.log(`Atualização concluída :)\n`);
                            break
                        case 2:
                            console.log('Até logo :)\n');
                            break
                        case 0:
                            console.log('Até logo :)\n');
                            break;
                    }
                }
            }
        });
        if(chave == false){
            console.log(`Não existe ninguém com esse CPF :(\n`);
        }
    }
}