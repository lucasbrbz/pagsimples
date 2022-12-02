import "reflect-metadata"
import express from 'express'
import { Router } from 'express'
import { AuthController } from './src/controllers/AuthController'

const app = express()
app.use(express.json())
const routes = Router()

routes.get("/auth_user", new AuthController().handle)

app.listen(3330, () => console.log("server on"))