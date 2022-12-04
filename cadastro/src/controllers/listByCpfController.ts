import { Request, Response } from 'express'
import { listByCPfService } from '../services/ListByCpfService';



export class ListByCpfController{

    async handle(request: Request, response: Response) {

        const {cpf} = request.params;

        const service = new listByCPfService()

        const result = await service.execute({
            cpf
        })
    
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }

}