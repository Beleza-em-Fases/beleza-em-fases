// Maria: Funções de Usuario

import { db } from "../db.js";

export const getUsuarios = (req, res) => {
    const q = "SELECT * FROM Usuario"; // Maria: Consulta todos usuarios do sistema

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getUsuario = (req, res) => {
    const q = "SELECT * FROM Usuario WHERE id = ?"; // Maria: Consulta um usuario de id x

    db.query(q, [req.params.id], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postUsuarioLogin = (req, res) => {
    const q = "SELECT * FROM Usuario WHERE email = ? and senha = ?"; // Maria: Consulta os dados para fazer login

    const values = [ // Maria: Valores com os objetos do sistema
        req.body.email,
        req.body.senha
    ]

    db.query(q, [...values], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postUsuarioEmail = (req, res) => {
    const q = "SELECT * FROM Usuario WHERE email = ?"; // Maria: Consulta o usuario de email x
    const values = [ // Maria: Valores com os objetos do sistema
        req.body.email    
    ]

    db.query(q, [...values], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        console.log("Chegou aqui")
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postUsuarios = (req, res) => {
    const q = "INSERT INTO Usuario(`nome`, `nascimento`, `email`, `senha`) VALUES(?)"; // Maria: Cria um novo usuario

    const values = [ // Maria: Valores com os objetos do sistema
        req.body.nome, // Maria: Requisição com o seu corpo e os objetos
        req.body.nascimento,
        req.body.email,
        req.body.senha
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Usuário criado com sucesso!");
    })
}

export const putUsuarios = (req, res) => {
    const q = "UPDATE Usuario SET `nome` = ?, `nascimento` = ?, `email` = ?, `senha` = ? WHERE `id` = ?"; // Maria: Realiza o update do usuario pelo id

    const values = [
        req.body.nome,
        req.body.nascimento,
        req.body.email,
        req.body.senha
    ]

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const putUsuarioSenha = (req, res) => {
    const q = "UPDATE Usuario SET `senha` = ? WHERE `email` = ?"; //Maria: Atualiza a senha do usuario

    const values = [
        req.body.senha
    ]

    db.query(q, [...values, req.params.email], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const deleteUsuarios = (req, res) => {
    const q = "DELETE FROM Usuario WHERE `id` = ?"; // Maria: Realiza o delete do usuario pelo id

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Usuário deletado com sucesso!");
    })
}