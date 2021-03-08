import { BankAccount, BankAccountV2} from "./classes/BankAccount";
import prompt from "prompt-sync";


let accOne = new BankAccount(1000, 350, 'John Doe', 1);
let accOne_v2 = new BankAccountV2(2000, 500, 'John Doe', 1);

let inputPrompt = prompt();
let version_option: number = 0;
let option: number = 0;

console.clear();
console.log("Escolha qual versão do fakeBank você deseja usar.");
console.log("+===============================================+");
console.log("|1 - FakeBank v.1.0");
console.log("|2 - Fakebank v.1.1.0");

version_option = +inputPrompt("escolha uma opção:   ");

if (version_option === 1) {

    while (option !== 9) {
        console.log("+================== Fake Bank Accout V1==================+");
        console.log("| 1 - Ver saldo.                                       |");
        console.log("| 2 - Ver limite.                                      |");
        console.log("| 3 - Sacar Dinheiro.                                  |");
        console.log("| 4 - Depositar Dinheiro.                              |");
        console.log("| 5 - Aumentar Limite.                                 |");
        console.log("| 9 - Sair.                                            |");
    
        option = +inputPrompt("escolha um opção:  ");
        console.log(option);
        switch (option) {
            
            case 1:
                console.clear()
                console.log("+=================== VERIFICAÇÃO DE SALDO ====================+");
                console.log(`| OLÁ ${accOne.nome} SEU SALDO ATUAL É DE:`);
                console.log(`| R$ ${accOne.saldo.toFixed(2)}`);
                console.log('')
                console.log('')
    
                break;
            case 2:
                console.clear()
                console.log("+=================== VERIFICAÇÃO DE LIMITE ====================+");
                console.log(`| OLÁ ${accOne.nome} SEU LIMITE ATUAL É DE:`);
                console.log(`| R$ ${accOne.limite.toFixed(2)}`);
                console.log('')
                console.log('')
                break;
            case 3:
                console.clear()
                console.log("+=================== SAQUE DE DINHEIRO ====================+");
                console.log("")
                const sacado = +inputPrompt("Digite o valor a ser sacado: R$")
                if (sacado < 0){
                    console.log("Error: Operação encerrada, valor especificado é negativo")
                    break;
                }
    
                const subtotal = accOne.saldo - sacado;
                if (subtotal < 0) {
                    console.log("Você não possui saldo suficiente.")
                    break;
                } else {
                    accOne.saldo = subtotal
                    console.log(`Seu saldo atual é de R$${accOne.saldo.toFixed(2)}`);
                    break
                }
            case 4:
                console.clear()
                console.log("+=================== DEPOSITO DE DINHEIRO ====================+");
                console.log("")
                const depositado = +inputPrompt("Digite o valor a ser depositado: R$")
                if (depositado < 0){
                    console.log("Error: Operação encerrada, valor especificado é negativo")
                    break;
                }
                accOne.saldo += depositado;
                break;
            
            case 5:
                console.clear()
                console.log("+=================== AUMENTO DE LIMITE ====================+");
                console.log("")
                const solicitado = +inputPrompt("Digite o valor desejado a acrescentar no seu limite: R$")
                
                if (solicitado < 0){
                    console.log("Error: Operação encerrada, valor especificado é negativo")
                    break;
                }
                if (solicitado > accOne.saldo * 0.25){
                    console.log("Error: Operação encerrada, você não tem saldo suficiente para solicitar este limite")
                    console.log("Obs: O limite solicitado deve ser até 25% do seu saldo.")
                    break;
                }
                accOne.limite += solicitado;
                break;
    
            default:
                break;
        }
    }
}
if (version_option === 2){
    while (option !== 9) {
        console.log("+================== Fake Bank Accout V1==================+");
        console.log("| 1 - Resumo da conta.                                 |");
        console.log("| 2 - Sacar Dinheiro.                                  |");
        console.log("| 3 - Depositar Dinheiro.                              |");
        console.log("| 4 - Aumentar Limite.                                 |");
        console.log("| 9 - Sair.                                            |");
    
        option = +inputPrompt("escolha um opção:  ");
    
        switch (option) {
            case 1:
                console.clear()
                accOne_v2.getReport()
                console.log('')
                console.log('')
                
                break;
            case 2:
                console.clear()
                console.log("+=================== SAQUE DE DINHEIRO ====================+");
                console.log("")
                const sacado = +inputPrompt("Digite o valor a ser sacado: R$")

                accOne_v2.setSaldo(sacado, option);
                accOne_v2.getReport()

                break;
            case 3:
                console.clear()
                console.log("+=================== DEPOSITO DE DINHEIRO ====================+");
                console.log("")
                const depositado = +inputPrompt("Digite o valor a ser sacado: R$")

                accOne_v2.setSaldo(depositado, option);
                accOne_v2.getReport()

                break;
            
            case 4:
                console.clear()
                console.log("+=================== AUMENTO DE LIMITE ====================+");
                console.log("")
                const solicitado = +inputPrompt("Digite o valor desejado a acrescentar no seu limite: R$")
                
                accOne_v2.setLimite(solicitado)
                accOne_v2.getReport()
                break;
    
            default:
                break;
        }
    }
}