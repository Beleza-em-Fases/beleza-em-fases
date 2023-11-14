document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const nascimento = document.getElementById("data").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const formData = {
        nome: nome,
        nascimento: nascimento,
        email: email,
        senha: senha
    };

    fetch("http://localhost:8080/usuario/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Exibe a resposta no console para fins de depuração

        // Verifique a resposta e exiba uma mensagem adequada no HTML
        if (data.status === "success") {
            document.getElementById("mensagem").innerText = "Usuário cadastrado com sucesso!";
        } else {
            document.getElementById("mensagem").innerText = "Erro ao cadastrar usuário: " + data.message;
        }
    })
    .catch(error => {
        console.error("Erro ao cadastrar usuário:", error);
        document.getElementById("mensagem").innerText = "Erro ao cadastrar usuário. Por favor, tente novamente.";
    });
});
