import { Router } from 'express'
import { AuthController } from './controllers/AuthController'



const routes = Router()

routes.get("/auth_user", new AuthController().handle)



export { routes }