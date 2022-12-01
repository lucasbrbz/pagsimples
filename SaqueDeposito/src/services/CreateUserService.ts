import axios from "axios"
import { getRepository } from "typeorm"
import { User } from "../entities/User"

interface IUser {
    nome?: string,
    cpf?: string,
    senha?: string,
    saldo?: string
}

export class CreateUserService {

    async execute({ nome, cpf, senha, saldo }: IUser): Promise<User | Error> {
        
        const repo = getRepository(User)

        let CPF
        let SENHA
        let ID
        let NOME
        const data = await axios(`http://localhost:3333/user`)
        const result = data.data

        const saveAll = result.map(async (varCerta) =>{
            ID = varCerta.id
            NOME = varCerta.nome
            CPF = varCerta.cpf
            SENHA = varCerta.senha

            const result1 = repo.create({
                id: ID,
                nome: NOME,
                cpf: CPF,
                senha: SENHA,
                saldo: '0'
            })
            await repo.save(result1)
        })

        return saveAll 
    }

}