import "reflect-metadata"
import express from "express"
import "./src/database"
import {CreateDeposito} from './src/controllers/CreateDepositoController'
import {CreateSaqueController} from './src/controllers/CreateSaqueController'
import {UserController} from './src/controllers/UserController'

const app = express()
app.use(express.json())

app.post("/saldo", new UserController().handle)
app.post("/deposito/:cpf", new CreateDeposito().handle)
app.post("/saque/:cpf", new CreateSaqueController().handle)

app.listen(process.env.PORT || 3000, () => console.log("server on"))