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

// Maria: Lógica do menu de produtos
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

//Lógica dos botões - slide (Luiza)
let slideIndex = 0;
const slides = document.querySelectorAll('.grid-item-perguntas');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const slidesToShow = 4;

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    if (slideIndex + slidesToShow > slides.length) {
        slideIndex = slides.length - slidesToShow;
    }

    if (slideIndex < 0) {
        slideIndex = 0;
    }

    if (slideIndex >= slides.length - 4) {
        slideIndex = slides.length - 4;
        nextButton.style.visibility = 'hidden';
    } else {
        nextButton.style.visibility = 'visible';
    }

    if (slideIndex <= 0) {
        slideIndex = 0;
        previousButton.style.visibility = 'hidden';
    } else {
        previousButton.style.visibility = 'visible';
    }

    for (let i = slideIndex; i < slideIndex + slidesToShow; i++) {
        slides[i].style.display = 'grid';
    }
}

function nextSlide() {
    slideIndex += 4;
    showSlides();
}

function previousSlide() {
    slideIndex -= 4;
    showSlides();
}

showSlides();
//Lógica dos botões - slide (Luiza

// Maria: Cadastrando no banco
const mensagemForm = document.getElementById("mensagemForm")

mensagemForm.addEventListener('submit', function (event){
    event.preventDefault()
    console.log("teste contato - ")
    let dados = {
        "nome": document.getElementById("nome").value,
        "email": document.getElementById("email").value,
        "mensagem": document.getElementById("mensagem").value
    }
  
    console.log(JSON.stringify(dados))
  
      // Redireciona o usuário para outra tela 
       fetch("http://localhost:3030/contato/contatar", {
          method: "POST",
          body: JSON.stringify(dados),
          headers:{
              "Content-Type": "application/json"
          }
      })
      .then(resposta => resposta.json())
      .then(resultado =>  window.location.href = "contato.html") // Maria: Se o contato for enviado, a pagina recarrega

      
});