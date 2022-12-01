import { getRepository } from "typeorm"
import { User } from "../entities/User"





class ListAllUserService {

    async execute() {
        const repo = getRepository(User)

        const listUser = await repo.find()

        return listUser
    }

    

}

export { ListAllUserService }