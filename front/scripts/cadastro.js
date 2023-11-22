// Maria, Lie

//Maria: Cadastra usuario no banco
document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const senha = document.getElementById("senha").value;

    
    // Verifica a força da senha
    if (!verificarSenhaFraca(senha)) {
      exibirMensagem("A senha é fraca. Escolha uma senha com mais de oito caracteres.");
      return;
    }

    let dados = {
      "nome": document.getElementById("nome").value,
      "nascimento": document.getElementById("data").value,
      "email": document.getElementById("email").value,
      "senha": document.getElementById("senha").value
  }

  console.log(JSON.stringify(dados))


    // Redireciona o usuário para outra tela (substitua pelo URL desejado)
     fetch("http://localhost:3030/usuario/cadastrar", {
        method: "POST",
        body: JSON.stringify(dados),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(resposta => resposta.json())
    .then(resultado =>  window.location.href = "login.html")
    
   
    
});

  // Função para verificar a força da senha (exemplo simples)
function verificarSenhaFraca(senha) {
    // Adicione suas regras para determinar a força da senha
    // Neste exemplo, verificamos se a senha tem pelo menos 8 caracteres
    return senha.length >= 8;
}

  // Função para exibir uma mensagem temporária
function exibirMensagem(mensagem) {
    document.getElementById("mensagem").innerText = mensagem;
    setTimeout(function () {
      document.getElementById("mensagem").innerText = "";
    }, 5000); // A mensagem será removida após 5 segundos (5000 milissegundos)
}

