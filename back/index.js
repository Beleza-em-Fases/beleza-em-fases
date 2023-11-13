import express from "express"
import cors from "cors"
import rotasUsuario from "./rotas/rotasUsuario.js"

const app = express()

app.use(express.json()) //Maria: Recebe pacotes
app.use(cors())

app.use("/usuario", rotasUsuario) //Maria: Usa a rota /usuario

app.listen(8080) //Maria: Porta da aplicação