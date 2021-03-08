// ENTENDENDO O MÉTODO CONSTRUTOR Parte 1

// CRIA CLASSE
class Company {
    name: string = '';
    city: string = '';

    // O que é passado como parametro para o construtor torna-se obrigatório no instanciamento
    constructor(x: string){
        this.name = x;
    }

}

// INSTANCIA JÁ COM METODO CONSTRUTOR
let company_1 = new Company('Beto Carrero');

console.log(company_1)