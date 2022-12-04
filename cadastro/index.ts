import "reflect-metadata"
import express from "express"
import "./src/database"
import {ListAllUserController} from './src/controllers/ListAllUsersController'
import {ListByCpfController} from './src/controllers/listByCpfController'
import {UserController} from './src/controllers/UserController'

const app = express()
app.use(express.json())

app.post("/user", new UserController().handle)
app.get("/user", new ListAllUserController().handle)
app.get("/user/:cpf", new ListByCpfController().handle)

app.listen(process.env.PORT || 3000, () => console.log("server on"))