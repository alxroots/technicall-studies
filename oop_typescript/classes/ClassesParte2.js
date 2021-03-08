"use strict";
// ENTENDENDO O MÉTODO CONSTRUTOR Parte 1
// CRIA CLASSE
var Company = /** @class */ (function () {
    // O que é passado como parametro para o construtor torna-se obrigatório no instanciamento
    function Company(x) {
        this.name = '';
        this.city = '';
        this.name = x;
    }
    return Company;
}());
// INSTANCIA JÁ COM METODO CONSTRUTOR
var company_1 = new Company('Beto Carrero');
console.log(company_1);
