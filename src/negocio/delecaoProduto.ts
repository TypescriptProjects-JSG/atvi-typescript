import Produto from "../modelo/produto";
import Delecao from "./delecao";
import Entrada from "../io/entrada";

export default class DelecaoProdutos extends Delecao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nInício da deleção de produtos`);
        let nomeDelecao = this.entrada.receberTexto(`Por favor informe o nome do produto: `)    
        
        var chave = false
        this.produtos.forEach(produto => {
            var nome = produto.nome
            if(nome == nomeDelecao){
                console.log(`Você tem certeza da deleção do produto: `+ produto.nome);
                console.log('1 - Sim');
                console.log('2 - Não');
                console.log('0 - Sair');
                console.log();
                chave = true

                var opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                switch (opcao) {
                    case 1:
                        for(var i=0; i<=this.produtos.length; ++i){
                            if(this.produtos[i].nome == nome){
                                this.produtos.splice(i, 1)
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
            console.log(`Não existe nem um produto com esse nome :(\n`);
        }
    }
}