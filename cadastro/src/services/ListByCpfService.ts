import { getRepository } from "typeorm"
import { User } from "../entities/User"
type Iteste = {
    cpf: any;
}


class listByCPfService{

    async execute({cpf}: Iteste){
        const repo = getRepository(User)

        const result = await repo.find({
            where:{
                cpf: cpf
            }
        })

        return result 
    }
}

export {listByCPfService}