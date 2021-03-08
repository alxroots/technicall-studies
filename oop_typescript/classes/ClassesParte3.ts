//Construtores Parte 2 (Princípio de encapsulamento)

class PessoaFisica {
    constructor(
        //Passar os attrs direto para o construtor (como params), não preciso colocar um valor default, mas vou ser obrigado a informar na hora de instanciar;
        public nome: string,
        public idade: number,
        public cpf: string
    
    ){}
}

const AlexSousa = new PessoaFisica("Alex Sousa", 37, "000.000.000-00");
console.log(AlexSousa);

//rodar com ts-node 
