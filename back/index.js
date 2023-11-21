import express from "express"
import cors from "cors"
import rotasUsuario from "./rotasUsuario.js"
import rotasForum from "./rotasForum.js"
import rotasProdutos from "./rotasProdutos.js"
import rotasQuiz from "./rotasQuiz.js"

const app = express()

app.use(express.json()) //Maria: Recebe pacotes
app.use(cors())

app.use("/usuario", rotasUsuario) //Maria: Usa a rota /usuario
app.use("/forum", rotasForum) //Maria: Usa a rota /forum
app.use("/produtos", rotasProdutos) //Maria: Usa a rota /produtos
app.use("/quiz", rotasQuiz) //Maria: Usa a rota /quiz

const port = 3030
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); //Maria: No meu computador a porta 8080 não estava funcionando