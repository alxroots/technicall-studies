class AppError {
    public readonly message: string;
    public readonly statuscode: number;

    constructor(message: string, statuscode=406){
        this.message = message;
        this.statuscode = statuscode;
    }
}

export default AppError;