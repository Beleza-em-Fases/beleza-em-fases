// Maria: Funções de Contato

import { db } from "../db.js";

export const getContatos = (req, res) => {
    const q = "SELECT * FROM Contato"; // Maria: Consulta todos contatos do sistema

    db.query(q, (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const getContato = (req, res) => {
    const q = "SELECT * FROM Contato WHERE id = ?"; // Maria: Consulta um contato de id x

    db.query(q, [req.params.id], (error, data) =>{ // Maria: Realiza uma query, recebe o parametro do erro e dos dados
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json(data); // Maria: Se não retorna uma resposta com status de sucesso
    })
}

export const postContato = (req, res) => {
    const q = "INSERT INTO Contato(`nome`, `email`, `mensagem`) VALUES(?)"; // Maria: Cria um novo contato

    const values = [ // Maria: Valores com os objetos do sistema
        req.body.nome, // Maria: Requisição com o seu corpo e os objetos
        req.body.email,
        req.body.mensagem
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(`Erro: ${error}`); // Maria: Em caso de erro
        return res.status(200).json("Contato criado com sucesso!");
    })
}
