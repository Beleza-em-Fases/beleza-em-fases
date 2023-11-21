// Maria: Funções do Forum

import { db } from "../db.js";

export const getComentarios = (req, res) => {
    const q = "SELECT * FROM Comentarios"; // Maria: Consulta todos comentarios do forum

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getComentario = (req, res) => {
    const q = "SELECT * FROM Comentarios WHERE id = ?"; // Maria: Consulta um comentario de id x

    db.query(q, [req.params.id], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getComentariosMes = (req, res) => {
    const q = "SELECT * FROM Comentarios WHERE MONTH(publicacao)"; // Maria: Consulta os comentarios de tal mes

    db.query(q, [req.params.id], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getComentariosAno = (req, res) => {
    const q = "SELECT * FROM Comentarios WHERE YEAR(publicacao)"; // Maria: Consulta os comentarios de tal ano

    db.query(q, [req.params.id], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postComentarios = (req, res) => {
    const q = "INSERT INTO Comentarios(`titulo`, `publicacao`, `comentario`) VALUES(?)"; // Maria: Cria um novo comentario

    const values = [ // Maria: Valores com os objetos do sistema
        req.body.titulo, // Maria: Requisição com o seu corpo e os objetos
        req.body.publicacao,
        req.body.comentario,
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Comentário criado com sucesso!");
    })
}

export const putComentario = (req, res) => {
    const q = "UPDATE Comentarios SET `titulo = ?`, `publicacao = ?`, `comentario = ?` WHERE `id` = ?";

    const values = [
        req.body.titulo, 
        req.body.publicacao,
        req.body.comentario,
    ]

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const deleteComentario = (req, res) => {
    const q = "DELETE FROM Comentarios WHERE `id` = ?";

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Usuário deletado com sucesso!");
    })
}