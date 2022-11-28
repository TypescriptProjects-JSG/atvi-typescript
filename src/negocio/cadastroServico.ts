import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do serviço: ");
        let nomes = this.servicos.map(i => (i.nome))
        if (nomes.includes(nome)) {
            console.log(`${nome} já existe no sistema`);
            console.log();
        } else {
            let preco = this.entrada.receberNumero(`Valor do servico: `)
            let cadastrar = new Servico(nome, Number(preco));
            this.servicos.push(cadastrar);
            console.log();
        }
    }
}