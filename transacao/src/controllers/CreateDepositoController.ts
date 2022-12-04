import { Request, Response } from 'express'
import { CreateDepositoService } from '../services/CreateDepositoService';
export class CreateDeposito{

    async handle(request: Request, response: Response) {

        const {cpf} = request.params;
        const {saldo } = request.body;

        const service = new CreateDepositoService()

        const result = await service.execute({
            cpf,
            saldo
        })
    
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}


