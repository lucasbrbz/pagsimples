import { request, Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'



export class UserController {
    async handle(request: Request, response: Response) {
        const { nome, cpf, senha } = request.body

        const service = new CreateUserService()

        const result = await service.execute({ cpf, nome, senha });

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        response.json(result)
    }
}