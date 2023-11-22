import express from "express"
import { getProdutos, getProduto, getProdutosMarca, getProdutosNome, getProdutosFuncao, getProdutosBarato, getProdutosCaro, postProdutos, putProduto, deleteProduto } from "./controladores/produtosController.js";

const roteador = express.Router();

// Maria: Rotas para os métodos do controller
roteador.get("/", getProdutos)
roteador.get("/:id", getProduto)
roteador.get("/marca/:marca", getProdutosMarca)
roteador.get("/nome/:nome", getProdutosNome)
roteador.get("/funcao/:funcao", getProdutosFuncao)
roteador.get("/preco/:barato", getProdutosBarato)
roteador.get("/preco/:caro", getProdutosCaro)

roteador.post("/cadastrar", postProdutos);

roteador.put("/:id", putProduto)

roteador.delete("/:id", deleteProduto)

export default roteador;