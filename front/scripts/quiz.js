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

// Laís, Lie:
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
    // Se não houver mais perguntas, exiba o resultado final
    showResult();
  }
}
const quiz = document.getElementById("quiz")
console.log(quiz)
//Maria: cadastra no banco
function showResult() {
    console.log("entrou no showResult")
    console.log("opcao 2: "+selectedOption(3))
    console.log("opcao 3: "+selectedOption(4))
    
}
let contadorQuiz=0
const btnQuiz = document.getElementById("btn-quiz")

btnQuiz.addEventListener("click", function (event) {
    event.preventDefault();
    console.log( document.getElementById("nome").value)
    contadorQuiz++
    console.log(contadorQuiz)
    console.log("opcao "+contadorQuiz+": "+selectedOption(contadorQuiz))
    if(contadorQuiz == 8){

    let dados = {
        "name": document.getElementById("nome").value,
        "question2": selectedOption(2),
        "question3": selectedOption(3),
        "question4": selectedOption(4),
        "question5": selectedOption(5),
        "question6": selectedOption(6),
        "question7": selectedOption(7),
        "question8": selectedOption(8)
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

// Redireciona para a página cronograma.html após um breve atraso (por exemplo, 2 segundos)
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
