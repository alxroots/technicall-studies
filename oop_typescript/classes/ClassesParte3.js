"use strict";
//Construtores Parte 2 (Princípio de encapsulamento)
var PessoaFisica = /** @class */ (function () {
    function PessoaFisica(
    //Passar os attrs direto para o construtor (como params), não preciso colocar um valor default, mas vou ser obrigado a informar na hora de instanciar;
    nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    return PessoaFisica;
}());
var AlexSousa = new PessoaFisica("Alex Sousa", 37, "000.000.000-00");
console.log(AlexSousa);
