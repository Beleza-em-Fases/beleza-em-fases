// Maria: Exibir e fechar o menu do usuário
const userIcon = document.getElementById('userIcon');
const userMenu = document.getElementById('userMenu');

userIcon.addEventListener('click', function () {
    if (userMenu.style.display === 'block') {
        userMenu.style.display = 'none';
    } else {
        userMenu.style.display = 'block';
    }
});

const submenus = document.querySelectorAll(".submenu");

        submenus.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.querySelector(".submenu-options").classList.add("display-active");
            })

            element.addEventListener("mouseout", () => {
                element.querySelector(".submenu-options").classList.remove("display-active");
            })
        });

        const submenuOptions = document.querySelectorAll(".submenu-option");

        submenuOptions.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.querySelector(".submenu-options-inner").classList.add("display-active");
            })

            element.addEventListener("mouseout", () => {
                element.querySelector(".submenu-options-inner").classList.remove("display-active");
            })
        });

//Laís, Lie: 
//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

// Maria: Cadastrando no banco
const forumForm = document.getElementById("forumForm")
const data = new Date() //Tratanto a data 
var dia = "" +data.getDate()
var mes = "" +data.getMonth()
var ano = "" +data.getFullYear()
var publicacao = ""+ano+"-"+mes+"-"+dia


forumForm.addEventListener('submit', function (event){
    event.preventDefault()
    console.log(publicacao)
    console.log("teste comentario - ")
    let dados = {
        "nome": document.getElementById("name").value,
        "titulo": document.getElementById("title").value,
        "publicacao": publicacao,
        "comentario": document.getElementById("message").value
    }
  
    console.log(JSON.stringify(dados))
  
      // Redireciona o usuário para outra tela (substitua pelo URL desejado)
       fetch("http://localhost:3030/forum/postar", {
          method: "POST",
          body: JSON.stringify(dados),
          headers:{
              "Content-Type": "application/json"
          }
      })
      .then(resposta => resposta.json())
      .then(resultado => window.location.href = "forum.html")
      
});

//Maria: Mostrando os comentários na tela
Comentario()

function Comentario() {
    fetch("http://localhost:3030/forum", {
          method: "GET",
          headers:{
              "Content-Type": "application/json"
          }
      })
      .then(resposta => resposta.json())
      .then(comentarios => {
        console.log("Pegando os comentários")
        preencherComentario(comentarios)
      })
}

const divPai = document.getElementById("div-pai")
function preencherComentario(comentarios) {
    console.log("Mostrando comentários:" +comentarios)

    for (let i = 0; i < comentarios.length; i++) {
        //Maria: Criando os elementos dos comentários
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        const div3 = document.createElement('div')
        const h4 = document.createElement('h4')
        const p1 = document.createElement('p')
        const br = document.createElement('br')
        const hr1 = document.createElement('hr')
        const p2 = document.createElement('p')
        const b = document.createElement('b')
        const b2 = document.createElement('b')
        const small = document.createElement('small')
        const small2 = document.createElement('small')
        const hr2 = document.createElement('hr')

        console.log("Add os elementos")

        //Maria: adicionando as classes
        div1.classList.add('subforum-row')
        div2.classList.add('subforum-description')
        div2.classList.add('subforum-column')
        div3.classList.add('subforum-mensagem')
        p1.classList.add('comentario')
        p2.classList.add('comentario')
        hr2.classList.add('subforum-devider')

        console.log("Add as classes")

        //Maria: adicionando os valores
        h4.textContent = comentarios[i].titulo
        p1.textContent = comentarios[i].comentario
        b.textContent = "Postado "
        small.textContent = "by "
        b2.textContent = comentarios[i].nome

        const dataFormatada = new Date(comentarios[i].publicacao);
        const opcoes = {year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatoData = new Intl.DateTimeFormat('pt-BR', opcoes);
        // Maria: Obtém a representação formatada da data
        const publicacaoFormatada = formatoData.format(dataFormatada);

        small2.textContent = " em " + publicacaoFormatada

        console.log("Add os valores")

        //Maria: encaixando as coisas
        div.appendChild(div1)
        div1.appendChild(div2)
        div2.appendChild(div3)
        div3.appendChild(h4)
        div2.appendChild(p1)
        div2.appendChild(hr1)
        div2.appendChild(p2)
        p2.appendChild(b)
        p2.appendChild(small)
        p2.appendChild(b2)
        p2.appendChild(small2)
        div.appendChild(br)
        div.appendChild(hr2)

        divPai.appendChild(div)

        console.log("Comentario exibido")
    }
}