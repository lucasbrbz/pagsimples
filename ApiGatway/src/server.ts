import express, { request, response } from "express"
import helmet from 'helmet'
import httpProxy from 'express-http-proxy'


const app = express()
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("", httpProxy("http://localhost:3333/user", { timeout: 3000 }))

app.get('/', (request, response) => {
    return response.json({ message: "oi" })
})



app.listen(3339, () => console.log("server on"))// mudar pois bate com a auth 3335 para o gatway
