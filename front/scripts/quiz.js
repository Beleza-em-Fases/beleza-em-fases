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

// Laís, Lie, Maria:
let currentQuestion = 1;
let quizAnswers = {};

function checkAnswer(questionNum, selectedOption) {
  // Remove a classe 'selected' de todas as opções antes de adicionar à opção selecionada
  const options = document.querySelectorAll('.question.active .option');
  options.forEach(option => option.classList.remove('selected'));

  // Adiciona a classe 'selected' à opção escolhida
  const selectedOptionElement = document.querySelector(`.question.active .options .option:nth-child(${selectedOption})`);
  if (selectedOptionElement) {
    selectedOptionElement.classList.add('selected');
    // Armazena a resposta do usuário
    quizAnswers[`question${questionNum}`] = selectedOption;
  }
}

// Maria: Verifica qual a opção que o usuario escolheu
function selectedOption(questionNumber) {
    let options = document.querySelectorAll(`#question${questionNumber} .options .option`);
    console.log("options: "+questionNumber);
    console.log(options);
    
    for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains("selected")) {
            console.log(options[i].textContent);
            return options[i].textContent;
        }
    }
    return null;
}

function nextQuestion() {
  // Esconde a pergunta atual
  const teste = document.getElementById(`question${currentQuestion}`)
  if(teste){
    teste.classList.remove('active');
  }
  
  // Incrementa o número da pergunta atual
  currentQuestion++;

  // Exibe a próxima pergunta
  const nextQuestionElement = document.getElementById(`question${currentQuestion}`);
  if (nextQuestionElement) {
    nextQuestionElement.classList.add('active');
  } else {
    console.log("chegou no showResult")
    // Se não houver mais perguntas, pula para próxima pagina
    verificarFucionamento();
  }
}
const quiz = document.getElementById("quiz")
console.log(quiz)

//Maria: verifica se as informações estão sendo pegas
function verificarFucionamento() {
    console.log("entrou no cadastro")
    console.log("opcao 2: "+selectedOption(2))
    console.log("opcao 3: "+selectedOption(3))
    console.log("opcao 4: "+selectedOption(4))
    console.log("opcao 5: "+selectedOption(5))
    console.log("opcao 6: "+selectedOption(6))
    console.log("opcao 7: "+selectedOption(7))
    console.log("opcao 8: "+selectedOption(8))
    console.log("opcao 9: "+selectedOption(9))
}

let contadorQuiz=0 // Maria: Serve para que o quiz não seja enviado antes de terminar todas perguntas
const btnQuiz = document.getElementById("btn-quiz")

btnQuiz.addEventListener("click", function (event) { // Maria: Verifica as vezes que o usuario clica no botão
    event.preventDefault();
    console.log( document.getElementById("nome").value)
    contadorQuiz++
    console.log(contadorQuiz)
    console.log("opcao "+contadorQuiz+": "+selectedOption(contadorQuiz))
    if(contadorQuiz == 9){

    let dados = {
        //"name": document.getElementById("nome").value,
        "curvatura": selectedOption(2),
        "nivelDanos": selectedOption(3),
        "comprimento": selectedOption(4),
        "espessura": selectedOption(5),
        "oleosidade": selectedOption(6),
        "forca": selectedOption(7),
        "elasticidade": selectedOption(8),
        "condicaoAtual": selectedOption(9)
    };    
    console.log("opcao 1: "+selectedOption(2))
    console.log("opcao 2: "+selectedOption(3))
    console.log("opcao 3: "+selectedOption(4))

console.log(JSON.stringify(dados))

    fetch("http://localhost:3030/quiz/quiz-capilar", {
    method: "POST",
    body: JSON.stringify(dados),
    headers:{
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    console.log('Respostas do quiz enviadas com sucesso!', data);
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Você concluiu o quiz! Redirecionando para o cronograma...";

    resultElement.classList.add('result-message');

    // Maria: Após o final do quiz, redireciona para página do cronograma com 2 sec de intervalo
    setTimeout(function () {
        window.location.href = "cronograma.html";
    }, 2000); 
    })
    .catch(error => console.error('Erro ao enviar respostas do quiz:', error));

    // Oculte o botão "Próxima Pergunta" após o término do quiz
    document.querySelector('.btn-submit').style.display = 'none';
    }
})

// Maria: Apaga o texto ao passar a primeira página
const divText = document.getElementById("div-text")

btnQuiz.addEventListener('click', function (event) {
  divText.classList.add('d-none')
})
