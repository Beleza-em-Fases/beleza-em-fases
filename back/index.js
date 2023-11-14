import express from "express"
import cors from "cors"
import rotasUsuario from "./rotasUsuario.js"

const app = express()

app.use(express.json()) //Maria: Recebe pacotes
app.use(cors())

app.use("/usuario", rotasUsuario) //Maria: Usa a rota /usuario

app.listen(3030, () => {
    console.log('Servidor rodando na porta 3030');
}); //Maria: No meu computador a porta 8080 não estava funcionando