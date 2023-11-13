// Maria: Funções de Usuario

import { db } from "../db.js";

export const getUsuarios = (req, res) => {
    const q = "SELECT * FROM Usuario"; // Maria: Consulta todos usuarios do sistema

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(error); // Maria: Em caso de erro

        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postUsuarios = (req, res) => {
    const q = "INSERT INTO Usuario(`nome`, `nascimento`, `email`, `senha`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.nascimento,
        req.body.email,
        req.body.senha
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário criado com sucesso!");
    })
}

export const putUsuarios = (req, res) => {
    const q = "UPDATE Usuario SET `nome` = ?, `nascimento` = ?, `email` = ?, `senha` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.nascimento,
        req.body.email,
        req.body.senha
    ]

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const deleteUsuarios = (req, res) => {
    const q = "DELETE FROM Usuario WHERE `id` = ?";

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário deletado com sucesso!");
    })
}