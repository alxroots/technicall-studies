import AppError from "../errors/AppError";

export class BankAccount {
    constructor(
        public saldo: number,
        public limite: number,
        public nome: string,
        public number: number,
    ){}
};

export class BankAccountV2 {
    constructor(
        public saldo: number,
        public limite: number,
        public nome: string,
        public number: number,
    ){}
    
    getReport(): void {
        console.log("| ========== RESUMO DA CONTA =========== |");
        console.log(`|  A - Nome:  ${this.nome}`)
        console.log(`|  B - Saldo atual:  ${this.saldo}`)
        console.log(`|  C - Limite atual:  ${this.limite}`);
        console.log(`|  D - Numero da conta:  ${this.number}`);
        console.log("| ========== XXXXXXXXXXXXXXX =========== |");
        console.log("")
    }

    setSaldo(value: number, op:number ): number {

        //debita da conta
        if (op === 2){
            if (value < 0){
                throw new AppError('Error: We expected a positive value.');
            }
            const subtotal = this.saldo - value;
    
            if (subtotal < 0) {
                throw new AppError('Error: You have no balance enough for this operation.');
            } 
            console.clear()
            console.log("+======= DEPÓSITO EFETUADO COM SUCESSO =======+");
            console.log("")
            return this.saldo = subtotal;
        }

        //credita na conta
        if (value < 0){
            throw new AppError('Error: We expected a positive value.');
        }
        console.clear()
        console.log("+======= SAQUE EFETUADO COM SUCESSO =======+");
        console.log("")
        return this.saldo += value;
        
    }

    setLimite(value: number) : number {
        
        if (value < 0){
            throw new AppError('Error: We expected a positive value.');
        }
        if (value > this.saldo * 0.25){
            throw new AppError(
                'Error: Operação encerrada, você não tem saldo suficiente para solicitar este limite (25% do saldo)'
            )
        }
        this.limite += value;
        console.clear()
        console.log("+======= ALTERAÇÃO EFETUADO COM SUCESSO =======+");
        console.log("")
        return this.limite
    }
    
}   