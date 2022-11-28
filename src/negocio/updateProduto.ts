import Entrada from "../io/entrada";
import Update from "./update";
import Produto from "../modelo/produto";

export default class UpdateProdutos extends Update {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nInício da atualização de produtos`);
        let nomeAtualizacao = this.entrada.receberTexto(`Por favor informe o nome do produto: `) 
        
        var chave = false
        this.produtos.forEach(produto => {
            var nome = produto.nome
            if(nome == nomeAtualizacao){
                console.log(`Produto: ` + produto.nome);
                console.log(`Valor: ` + produto.preco);
                chave = true
                console.log(`\nO que você quer alterar?`);
                console.log(`1 - Nome`);
                console.log(`2 - Valor`);
                console.log('0 - Sair');
                var opcao = this.entrada.receberNumero(`Escolha uma opção: `)
                
                switch (opcao) {
                    case 1:
                        produto.nome = this.entrada.receberTexto(`Novo nome: `)
                        break
                    case 2:
                        produto.preco = this.entrada.receberNumero(`Novo valor: `)
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
            console.log(`Não existe nem um produto com esse nome :(\n`);
        }
    }
}