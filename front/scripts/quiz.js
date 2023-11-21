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
let currentQuestion = 1;

function checkAnswer(questionNum, selectedOption) {
  // Remova a classe 'selected' de todas as opções antes de adicionar à opção selecionada
  const options = document.querySelectorAll('.question.active .option');
  options.forEach(option => option.classList.remove('selected'));

  // Adicione a classe 'selected' à opção escolhida
  const selectedOptionElement = document.querySelector(`.question.active .options .option:nth-child(${selectedOption})`);
  if (selectedOptionElement) {
      selectedOptionElement.classList.add('selected');
  }

  // Implemente a lógica para verificar a opção selecionada contra a resposta correta para cada pergunta
  // Não incrementamos a pontuação neste exemplo, mas você pode adicionar essa lógica conforme necessário
}

function nextQuestion() {
    // Esconda a pergunta atual
    document.getElementById(`question${currentQuestion}`).classList.remove('active');

    // Incrementa o número da pergunta atual
    currentQuestion++;

    // Exibe a próxima pergunta
    const nextQuestionElement = document.getElementById(`question${currentQuestion}`);
    if (nextQuestionElement) {
        nextQuestionElement.classList.add('active');
    } else {
        // Se não houver mais perguntas, exiba o resultado final
        showResult();
    }
}

function showResult() {
  // Exiba a pontuação do usuário e uma mensagem com base em seu desempenho
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = "Você concluiu o quiz! Redirecionando para o cronograma...";

  // Adicione uma classe ao elemento
  resultElement.classList.add('result-message');

  // Redireciona para a página cronograma.html após um breve atraso (por exemplo, 2 segundos)
  setTimeout(function () {
      window.location.href = "cronograma.html";
  }, 2000); // Ajuste o tempo conforme necessário

  // Oculte o botão "Próxima Pergunta" após o término do quiz
  document.querySelector('.btn-submit').style.display = 'none';
}

//Maria: Lógica de funcionamento do botão
const btnQuiz = document.getElementById("result")
const divText = document.getElementById("div-text")

btnQuiz.addEventListener('click', function (event) {
    divText.remove()
})