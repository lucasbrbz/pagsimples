import { Router } from 'express'
import { ListAllUserController } from './controllers/ListAllUsersController'
import { ListByCpfController } from './controllers/listByCpfController'
import { UserController } from './controllers/UserController'



const routes = Router()

routes.post("/user", new UserController().handle)
routes.get("/user", new ListAllUserController().handle)

routes.get("/user/:cpf", new ListByCpfController().handle)



export { routes }