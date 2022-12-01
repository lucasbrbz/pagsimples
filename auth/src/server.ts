import "reflect-metadata"
import express from 'express'

import { routes } from "./routes";

const app = express()
app.use(express.json())

app.use(routes)

app.listen(3330, () => console.log("server on"))



    



