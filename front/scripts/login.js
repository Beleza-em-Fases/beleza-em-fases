// Maria: Fazendo Login
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const formLogin = document.getElementById("formLogin")

function buscarUsuario(email, senha) {

    let dados = {
        "email": document.getElementById("email").value,
        "senha": document.getElementById("senha").value    
    }
    console.log(JSON.stringify(dados))
    
        return fetch("http://localhost:3030/usuario/login", {
            method: "POST",
            body: JSON.stringify(dados),           
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(resultado => {
            console.log("Retorna:" + resultado );
            return (resultado);
        })        
    }

    formLogin.addEventListener('submit', function (event){
        event.preventDefault()
        console.log("Login interrompido...")
        console.log("Verificando usuario");
    
        buscarUsuario(email.value, senha.value)
            .then(verificado => {
                console.log("Resultado: " + verificado);
    
                if (!verificado){
                    console.log(email.value)
                    console.log(senha.value)
                    event.stopPropagation()
                    console.log("Login Incorreto")
                    
                }
                else{
                    console.log("Login Efetuado!")
                    window.location.href = "home.html"; // Maria: Se o login for efetuado, direciona para o home
                }
            })
            
            .catch(erro => {
                console.error("Erro ao buscar usuário:", erro);
            });
    })