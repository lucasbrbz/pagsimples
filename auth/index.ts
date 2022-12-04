import "reflect-metadata"
import express from 'express'
import {AuthController} from './src/controllers/AuthController'

const app = express()
app.use(express.json())

app.get("/auth_user", new AuthController().handle)

app.listen(process.env.PORT || 3000, () => console.log("server on"))