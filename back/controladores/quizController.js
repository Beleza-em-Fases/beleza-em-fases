// Maria: Funções do Quiz

import { db } from "../db.js";

export const getAllQuiz = (req, res) => {
    const q = "SELECT * FROM Cabelo"; // Maria: Consulta todos quiz do sistema

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getQuiz = (req, res) => {
    const q = "SELECT * FROM Cabelo WHERE id = ?"; // Maria: Consulta um quiz de id x

    db.query(q, [req.params.id], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postQuiz = (req, res) => {
    const q = "INSERT INTO Cabelo(`curvatura`, `nivelDanos`, `comprimento`, `espessura`, `oleosidade`, `forca`, `elasticidade`, `condicaoAtual`) VALUES(?)"; // Maria: Cria um novo quiz

    const values = [ // Maria: Valores com os objetos do sistema
        req.body.curvatura, // Maria: Requisição com o seu corpo e os objetos
        req.body.nivelDanos,
        req.body.comprimento,
        req.body.espessura,
        req.body.oleosidade,
        req.body.forca,
        req.body.elasticidade,
        req.body.condicaoAtual
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Quiz criado com sucesso!");
    })
}

export const putQuiz = (req, res) => {
    const q = "UPDATE Cabelo SET `curvatura = ?`, `nivelDanos = ?`, `comprimento = ?`, `espessura = ?`, `oleosidade = ?`, `forca = ?`, `elasticidade = ?`, `condicaoAtual = ?` WHERE `id` = ?"; // Maria: Realiza o update do quiz pelo id

    const values = [
        req.body.curvatura, 
        req.body.nivelDanos,
        req.body.comprimento,
        req.body.espessura,
        req.body.oleosidade,
        req.body.forca,
        req.body.elasticidade,
        req.body.condicaoAtual
    ]

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Quiz alterado com sucesso!");
    })
}

export const deleteQuiz = (req, res) => {
    const q = "DELETE FROM Cabelo WHERE `id` = ?"; // Maria: Realiza o delete do comentário pelo id

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Quiz deletado com sucesso!");
    })
}