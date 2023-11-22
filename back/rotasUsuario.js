import express from "express"
import { getUsuarios, getUsuario, postUsuarioLogin, postUsuarioEmail, postUsuarios, putUsuarios, putUsuarioSenha, deleteUsuarios } from "./controladores/usuarioController.js";

const roteador = express.Router();

// Maria: Rotas para os métodos do controller
roteador.get("/", getUsuarios)
roteador.get("/:id", getUsuario)

roteador.post("/login", postUsuarioLogin)
roteador.post("/buscar-email", postUsuarioEmail)
roteador.post("/cadastrar", postUsuarios)

roteador.put("/:id", putUsuarios)
roteador.put("/redefinir/:email", putUsuarioSenha)

roteador.delete("/:id", deleteUsuarios)

export default roteador;