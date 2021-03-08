# Passos para um novo projeto TypeScript - Node

1. `yarn init -y`
    -> cria arquivo package.json
2. `yarn add @types/node -D`
3. `yarn add typescript ts-node -D`
4. `yarn add typeorm sqlite3 reflect-metadata`
5. criado manuamente o arquivo tsconfig.json

`target: indica qual versão JS o arquivo será renderizado`
`moduleResolution: indica qual lugar estão os módules do Node`

6. Aleração no package.json
```json
{
  "name": "registrar",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "./dist/index.d.js",
  "type": "commonjs",
  "license": "MIT",
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "test": "cd test && npm run test"
  },
  "dependencies": {
    "@types/node": "^14.14.31",
    "reflect-metadata": "^0.1.13",
    "sqlite3": "^5.0.2",
    "typeorm": "^0.2.31"
  },
  "devDependencies": {
    "ts-node": "^9.1.1",
    "typescript": "^4.2.3"
  }
}
```
7. Setting Up unit Test
    7.1 Criado uma pasta chamad test dentro do diretório registrar
    7.2 `yarn init -Y`
    7.3 `yarn install chai mocha -D`

8. Alterado package.json da pasta test
```json
{
  "name": "test",
  "description": "Test suit for student registrar library",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "pretest": "cd .. && yarn run build",
    "test": "rm -f registrardb.sqlite && mocha ./index"
  },
  "devDependencies": {
    "chai": "^4.3.3",
    "mocha": "^8.3.1"
  }
}
```
9. Criado a pasta Lib dentro de registrar
10. Criado um arquivo index.ts com umas configurações


