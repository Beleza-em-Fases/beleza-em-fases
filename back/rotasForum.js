import express from "express"
import { getComentarios, getComentarios, getComentariosMes, getComentariosAno, postComentarios, putComentario, deleteComentario} from "./controladores/forumController.js";

const roteador = express.Router();

roteador.get("/", getComentarios)
roteador.get("/:id", getComentarios)
roteador.get("/mes/:mes", getComentariosMes)
roteador.get("/ano/:ano", getComentariosAno)

roteador.post("/postar", postComentarios);

roteador.put("/:id", putComentario)

roteador.delete("/:id", deleteComentario)

export default roteador;