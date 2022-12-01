import { Request, Response } from 'express'
import { CreateSaqueService } from '../services/CreateSaqueService';


export class CreateSaqueController{

    async handle(request: Request, response: Response) {

        const {cpf} = request.params;
        const {saldo } = request.body;

        const service = new CreateSaqueService()

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