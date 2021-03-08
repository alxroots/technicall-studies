"use strict";
//atts: nome, vida, energia, attack, defesa
//CRIA CLASSE #1
var Character = /** @class */ (function () {
    function Character() {
        // attrs
        this.name = '';
        this.energy = 0;
        this.life = 0;
        this.attack = 0;
        this.defense = 0;
    }
    return Character;
}());
//DEFINE TIPO VARIAVEL #2
var char_01;
//CRIA OBJETO/INSTANCIA #3
char_01 = new Character();
//POPULA ATRIBUTOS DO OBJETO
char_01.name = 'Hulk';
char_01.energy = 78;
char_01.life = 100;
char_01.attack = 92;
char_01.defense = 89;
console.log(char_01);
