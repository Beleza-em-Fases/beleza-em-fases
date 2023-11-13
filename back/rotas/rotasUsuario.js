import express from "express"
import { db } from "../db.js";

const roteador = express.Router(); //Maria: Método de roteamento

roteador.get("/", (req, res)=>{
   const query = "SELECT * FROM Usuario" //Maria: Tabela Usuario

   db.query(query, (erro, resultado)=>{
      if(erro) return res.json(erro)
      return res.json(resultado).status(200)
   })
})

roteador.post("/", (req, res)=>{
   const query = "INSERT INTO Usuario(`nome`) VALUES(?)"

   const valores = [
      req.body.nome
   ]

   db.query(query, [valores], (erro)=>{
      if(erro) return res.json(erro)
      return res.json("Usuario cadastrado").status(200)
   })
})

roteador.put("/", (req, res)=>{res.send("Put")})

roteador.delete("/", (req, res)=>{res.send("Delete")})

export default roteador;