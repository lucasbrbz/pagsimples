import { Request, Response } from 'express'
import { ListAllUserService } from "../services/ListAllUserService";




export class ListAllUserController {
    async handle(request: Request, response: Response) {
        const service = new ListAllUserService()

        const result = await service.execute();

        return response.json(result)
    }
}