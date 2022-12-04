import { getRepository } from "typeorm"
import { User } from "../entities/User"

interface IUser {
    nome: string,
    cpf: string,
    senha: string
}

export class CreateUserService {

    async execute({ nome, cpf, senha }: IUser): Promise<User | Error> {
        const repo = getRepository(User)

        /* if (await repo.find({ cpf })) {
            return new Error("User already exists")
        } */
        const user = repo.create({
            cpf,
            nome,
            senha
        })

        await repo.save(user)

        return user;
    }

}