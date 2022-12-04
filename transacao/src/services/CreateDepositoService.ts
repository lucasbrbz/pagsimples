import { getRepository } from "typeorm";
import { User } from "../entities/User";



type Iteste = {
    cpf: any;
    saldo: string
}


class CreateDepositoService{

    async execute({cpf, saldo}: Iteste){
        
        const repo = getRepository(User)

        const user = await repo.findOne({
            where:{
                cpf: cpf
            }
        })

        if(!user){
            return new Error("User not found")
        }
        
        const userSomado = parseInt(user.saldo) + saldo
        user.saldo = userSomado

        await repo.save(user)        
    }
}

export {CreateDepositoService}