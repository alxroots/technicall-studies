//atts: nome, vida, energia, attack, defesa

//CRIA CLASSE #1
class Character {
    // attrs
    name: string = '';
    energy: number = 0;
    life: number = 0;
    attack: number = 0;
    defense: number = 0;
}

//DEFINE TIPO VARIAVEL #2
let char_01: Character;

//CRIA OBJETO/INSTANCIA #3
char_01 = new Character()

//POPULA ATRIBUTOS DO OBJETO
char_01.name = 'Hulk'
char_01.energy = 78;
char_01.life = 100;
char_01.attack = 92;
char_01.defense = 89;

console.log(char_01);