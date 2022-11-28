import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nCadastre seu produto`);
        let produto = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let nomes = this.produtos.map(i => (i.nome))
        if (nomes.includes(produto)) {
            console.log(`${produto} Esse produto já existe`);
        } else {
            let preco = this.entrada.receberNumero(`Por favor informe o nome do produto em R$: `)
            let cadastrar = new Produto(produto, preco);
            this.produtos.push(cadastrar);
            console.log();
        }
        console.log(`\nCadastro concluído :)\n`);
    }
}