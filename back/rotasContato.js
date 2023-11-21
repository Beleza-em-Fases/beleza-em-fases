import express from "express"
import { getContatos, getContato, postContato} from "./controladores/contatoController.js";

const roteador = express.Router();

roteador.get("/", getContatos)
roteador.get("/:id", getContato)

roteador.post("/contatar", postContato);

export default roteador;