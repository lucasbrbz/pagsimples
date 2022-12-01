import { Router } from 'express'
import { CreateDeposito } from './controllers/CreateDepositoController'
import { CreateSaqueController } from './controllers/CreateSaqueController'

import { UserController } from './controllers/UserController'



const routes = Router()

routes.post("/saldo", new UserController().handle)

routes.post("/deposito/:cpf", new CreateDeposito().handle)

routes.post("/saque/:cpf", new CreateSaqueController().handle)



export { routes }