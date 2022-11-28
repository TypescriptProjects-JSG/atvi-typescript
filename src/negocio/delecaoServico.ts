import Delecao from "./delecao";
import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class DelecaoServico extends Delecao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nInício da deleção de serviços`);
        let nomeDelecao = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)    
        
        var chave = false
        this.servicos.forEach(servico => {
            var nome = servico.nome
            if(nome == nomeDelecao){
                console.log(`Você tem certeza da deleção do serviço: `+ servico.nome);
                console.log('1 - Sim');
                console.log('2 - Não');
                console.log('0 - Sair');
                console.log();
                chave = true

                var opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                switch (opcao) {
                    case 1:
                        for(var i=0; i<=this.servicos.length; ++i){
                            if(this.servicos[i].nome == nome){
                                this.servicos.splice(i, 1)
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
            console.log(`Não existe nem um serviço com esse nome :(\n`);
        }
    }
}