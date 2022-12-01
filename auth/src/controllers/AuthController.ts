import { Request, Response } from 'express'
import { AuthService } from '../services/AuthService';

export class AuthController{

    async handle(request: Request, response: Response) {
        const {cpf, senha} = request.body
        let logado = 'Usuario logado'

        const service = new AuthService()

        const result = await service.execute({ cpf, senha });
    
        if(result === logado){
            response.json(result)
        }
        else{
            return response.status(401).json(result)
        }
    

        
    }
}