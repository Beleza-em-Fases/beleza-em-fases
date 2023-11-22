import express from "express"
import { getUsuarios, getUsuario, postUsuarioLogin, postUsuarios, putUsuarios, deleteUsuarios } from "./controladores/usuarioController.js";

const roteador = express.Router();

roteador.get("/", getUsuarios)
roteador.get("/:id", getUsuario)

roteador.post("/login", postUsuarioLogin)
roteador.post("/cadastrar", postUsuarios);

roteador.put("/:id", putUsuarios)

roteador.delete("/:id", deleteUsuarios)

export default roteador;