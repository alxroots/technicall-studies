# Orientação a objeto
## Abstração
Representação dos objetos do mundo real dentro do sistema:
    1. Criar objetos por meio de classes
    2. Uma classe é representada por três elementos:
        2.1 Nome
        2.2 Atributos (caracterísiticas)
        2.3 Métodos (comportamentos)

    3. Um objeto é uma instancia criado a partir de uma classe.
        3.1 Exemplo clássico: Classe -> Animal --->> Macaco <- objeto

## Encapsulamento
Proteger metodos e atributos do objeto.
    1. Proteção via modificadores de acesso
        1.1 Public, Private, Protected
    2. Public
        2.1 Permite qualquer arquivo ou classe acessar os metodos e atributos (publicos)
    3. Private
        3.1 Proibe qualquer arquivo ou classe acessar os metodos e atributos (privados),
        3.2 Attrs : "Sempre" privados
        3.3 Methods: Quando prover interface usar public; Quando é um helper dá classe privado;
    4. Protected
        4.1 É praticamente privado, mas ao exenteder uma classe a classe filha terá acesso a tudo
        4.2 Metodos e atributos protected, ninguem pode acessar a menos a classe filha

    5. usando a palavra get na assinatura do metodo será preciso chamalos sem o paranteses get myMethod(){...} -> object.myMethod


## Herança
Permite a uma classe herdar e utilizar todos os metodos e atributos da sua classe de referencia, isso se dar utilizando o extends

**OFF TOPIC**
* Toda classe para ser utilizada (seus metodos e atributos), precisa ser instanciada ou seja transformada em objeto,
No entanto uma classe que possue metodos estaticos ou attributos estáticos as coisas funcionam diferente não precisando disso *
**EXEMPLO**
```ts
//file Util.ts
export class Util {
    public static somarDoisNumeros(n1: number, n2: number){
        return n1 + n2;
    }
}


// file Main.ts
import { Util } from './Util';

const resultado = Util.somarDoisNumeros(5, 15);

//resultado = 20

```

## Herança

