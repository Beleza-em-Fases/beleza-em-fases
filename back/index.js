import express from "express"
import cors from "cors"
import rotasUsuario from "./rotas/rotasUsuario.js"

// const express = require("express")
// const cors = require("cors")
// const rotas = require("./rotasUsuario")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/user", rotasUsuario)

app.listen(8080)