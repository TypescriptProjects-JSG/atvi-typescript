import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RGs':`);
            for(let k = 0; (cliente.getRgs.length)>k; ++k){
                console.log(`${k+1}º: ` + cliente.getRgs[k].getValor);
            }
            console.log(`Telefones:`);
            for(let k = 0; (cliente.getTelefones.length)>k; ++k){
                console.log(`${k+1}º: ` + cliente.getTelefones[k].getValor);
            }
            console.log();
        });
        console.log(`\n`);
    }
}