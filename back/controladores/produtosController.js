// Maria: Funções de Usuario

import { db } from "../db.js";

export const getProdutos = (req, res) => {
    const q = "SELECT * FROM Produtos"; // Maria: Consulta todos produtos do sistema

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getProduto = (req, res) => {
    const q = "SELECT * FROM Produtos WHERE id = ?"; // Maria: Consulta um produto de id x

    db.query(q, [req.params.id], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getProdutosMarca = (req, res) => {
    const q = "SELECT * FROM Produtos WHERE marca = ?"; // Maria: Consulta os produtos de marca x

    db.query(q, [req.params.marca], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getProdutosNome = (req, res) => {
    const q = "SELECT * FROM Produtos WHERE nome = ?"; // Maria: Consulta os produtos de nome x

    db.query(q, [req.params.nome], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getProdutosFuncao = (req, res) => {
    const q = "SELECT * FROM Produtos WHERE funcao LIKE ?"; // Maria: Consulta os produtos que possuem uma função x (mesmo se tiver outras)

    const searchTerm = `%${req.params.funcao}%`; // Maria: Adiciona "%" para corresponder a qualquer parte da string e o LIKE funcionar corretamente
    db.query(q, [req.params.funcao], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getProdutosBarato = (req, res) => {
    const q = "SELECT * FROM Produtos WHERE preco <= 50"; // Maria: Consulta os produtos de preco menor ou igual a 50

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getProdutosCaro = (req, res) => {
    const q = "SELECT * FROM Produtos WHERE preco > 50"; // Maria: Consulta os produtos de preco maior que 50

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postProdutos = (req, res) => {
    const q = "INSERT INTO Produtos(`nome`, `marca`, `descricao`, `funcao`, `preco`, `imagem`) VALUES(?)"; // Maria: Cria um novo produto

    const values = [ // Maria: Valores com os objetos do sistema
        req.body.nome, // Maria: Requisição com o seu corpo e os objetos
        req.body.marca,
        req.body.descricao,
        req.body.funcao,
        req.body.preco,
        req.body.imagem
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Produto criado com sucesso!");
    })
}

export const putProduto = (req, res) => {
    const q = "UPDATE Usuario SET `nome = ?`, `marca = ?`, `descricao = ?`, `funcao = ?`, `preco = ?`, `imagem = ?` WHERE `id` = ?"; // Maria: Realiza o update do produto pelo id

    const values = [
        req.body.nome,
        req.body.marca,
        req.body.descricao,
        req.body.funcao,
        req.body.preco,
        req.body.imagem
    ]

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Produto alterado com sucesso!");
    })
}

export const deleteProduto = (req, res) => {
    const q = "DELETE FROM Produtos WHERE `id` = ?"; // Maria: Realiza o delete do comentário pelo id

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Produto deletado com sucesso!");
    })
}