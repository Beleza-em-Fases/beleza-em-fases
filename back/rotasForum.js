import express from "express"
import { getComentarios, getComentario, getComentariosMes, getComentariosAno, postComentarios, putComentario, deleteComentario} from "./controladores/forumController.js";

const roteador = express.Router();

// Maria: Rotas para os métodos do controller
roteador.get("/", getComentarios)
roteador.get("/:id", getComentario)
roteador.get("/mes/:mes", getComentariosMes)
roteador.get("/ano/:ano", getComentariosAno)

roteador.post("/postar", postComentarios);

roteador.put("/:id", putComentario)

roteador.delete("/:id", deleteComentario)

export default roteador;