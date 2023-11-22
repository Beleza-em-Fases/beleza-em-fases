import express from "express"
import { getContatos, getContato, postContato} from "./controladores/contatoController.js";

const roteador = express.Router();

// Maria: Rotas para os métodos do controller
roteador.get("/", getContatos)
roteador.get("/:id", getContato)

roteador.post("/contatar", postContato);

export default roteador;