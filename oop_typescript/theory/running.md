# Running 

1. o comando `tsc`
    1.1 faz com que um novo arquivo seja gerado (nas suas respectivas pastas), arquivo este do tipo .js
    1.2 Pelo que entedi este arquivo é chamado de build e é o que vai ser levado para produção.
2. o comando `node NameOfTheFile.js`
    2.1 este comando permite que possamos ver os resultados dos nossos códigos caso eu tenha um console.log por lá
    2.2 se eu rodar `tsc -w` o tsc deve ficar monitorando todas as alterações daquele arquivo e não precisarei rodar o comando novamente
3. o commando `ts-node NameOfTheFile.ts`
    3.1 roda o typescript sem gerar os arquivos .js e reproduz os console.log caso tenha algum
