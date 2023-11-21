"use strict";
// class Pessoa {
//     nome: string;
//     renda?: number;
//     constructor(nome: string, renda?: number) {
//         this.nome = nome;
//         this.renda = renda;
//     }
//     dizOla(): string {
//         return `${this.nome} disse oi`;
//     }
// }
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new contaBancariaPessoaFisica(123456);
// contaDoPedro
ContaBancaria.retornaNumeroDoBanco();
