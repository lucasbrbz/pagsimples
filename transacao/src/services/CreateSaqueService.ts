import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface IUser {
    saldo?: number
    cpf: string
}

export class CreateSaqueService{


    async execute({  cpf, saldo }: IUser): Promise<User | Error> {
        const repo = getRepository(User)

        const user = await repo.findOne({
            where:{
                cpf: cpf
            }
        })

        if(!user){
            return new Error("User not found")
        }
        
        const userSomado = parseInt(user.saldo) - saldo
        user.saldo = userSomado.toString()

        console.log(userSomado)
        await repo.save(user)        
    }
    }
