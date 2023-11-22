// Maria: Redefinindo a senha
const email = document.getElementById("email")
const senha = document.getElementById("senhaNova")
const formNovaSenha = document.getElementById("formNovaSenha")

// Maria: Verifica se o email existe no banco
function buscarEmail() {
    console.log(email.value)
    console.log(senha.value)
    let dados = {
        "email": email.value
    }
    console.log(JSON.stringify(dados))

    return fetch("http://localhost:3030/usuario/buscar-email", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Erro na solicitação: " + resposta.status);
        }
        return resposta.json();
    })
    .then(resultado => {
        console.log("Retorna:" + resultado);
        return resultado;
    })
    .catch(erro => {
        console.error("Erro ao buscar usuário:", erro);
    });
}

// Maria: Atualiza a senha
formNovaSenha.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("Verificando email");

    buscarEmail()
        .then(verificado => {
            console.log("Resultado: " + verificado);

            if (!verificado) {
                console.log(email.value)
                event.stopPropagation()
                console.log("Email não existe");
            } else {
                let senhaNova = {
                    "senha": senha.value
                }
                console.log(JSON.stringify(senhaNova))

                fetch("http://localhost:3030/usuario/redefinir/" + email.value, {
                    method: "PUT",
                    body: JSON.stringify(senhaNova),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(resposta => {
                    if (!resposta.ok) {
                        throw new Error("Erro na solicitação: " + resposta.status);
                    }
                    return resposta.json();
                })
                .then(resultado => window.location.href = "login.html")
                .catch(erro => {
                    console.error("Erro na redefinição de senha:", erro);
                });
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar usuário:", erro);
        });
});
