import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Update from "./update";

export default class UpdateServicos extends Update {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nInício da atualização de serviços`);
        let nomeAtualizacao = this.entrada.receberTexto(`Por favor informe o nome do serviço: `) 
        
        var chave = false
        this.servicos.forEach(servico => {
            var nome = servico.nome
            if(nome == nomeAtualizacao){
                console.log(`Serviço: ` + servico.nome);
                console.log(`Valor: ` + servico.preco);
                chave = true
                console.log(`\nO que você quer alterar?`);
                console.log(`1 - Nome`);
                console.log(`2 - Valor`);
                console.log('0 - Sair');
                var opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                
                switch (opcao) {
                    case 1:
                        servico.nome = this.entrada.receberTexto(`Novo nome: `)
                        break
                    case 2:
                        servico.preco = this.entrada.receberNumero(`Novo valor: `)
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
            console.log(`Não existe nem um serviço com esse nome :(\n`);
        }
    }
}