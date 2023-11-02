import express from "express"
import { db } from "../db.js";

const rotasUsuario = express.Router();

rotasUsuario.get("/", (req, res)=>{
   const query = "SELECT * FROM user"

   db.query(query, (erro, resultado)=>{
      if(erro) return res.json(erro)
      return res.json(resultado).status(200)
   })
})

rotasUsuario.post("/", (req, res)=>{
   const query = "INSERT INTO user(`nome`) VALUES(?)"

   const valores = [
      req.body.nome
   ]

   db.query(query, [valores], (erro)=>{
      if(erro) return res.json(erro)
      return res.json("Usuario cadastrado").status(200)
   })
})

rotasUsuario.put("/", (req, res)=>{res.send("Put")})

rotasUsuario.delete("/", (req, res)=>{res.send("Delete")})

export default rotasUsuario;

// rotasUsuario.get("/", (_, res) => {
//    return res.send("oi")
// })

// module.exports = rotasUsuario