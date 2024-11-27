const quizData = [
  {
    question: "Qual é o maior oceano do mundo?",
    answer: "Oceano Pacífico",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Quem inventou a lâmpada elétrica?",
    answer: "Thomas Edison",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Qual é o menor país do mundo?",
    answer: "Vaticano",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Quem pintou a Mona Lisa?",
    answer: "Leonardo da Vinci",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Qual é o planeta mais próximo do Sol?",
    answer: "Mercúrio",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Qual é o idioma mais falado no mundo?",
    answer: "Inglês",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Qual é a capital do Brasil?",
    answer: "Brasília",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Qual é o animal mais rápido do mundo?",
    answer: "Falcão-peregrino",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Quantos ossos tem o corpo humano adulto?",
    answer: "206 ossos",
    image: "photo.jpg" // Caminho da imagem
  },
  {
    question: "Qual é a maior floresta do mundo?",
    answer: "Amazônia",
    image: "photo.jpg" // Caminho da imagem
  }
];

// Elementos HTML
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const quizContainer = document.getElementById("quiz-container");
const timerText = document.getElementById("timer-text");

let currentQuestionIndex = 0;
let countdown;
let displayAnswerTimeout;

// Função para exibir a pergunta atual
function displayQuestion() {
  const currentQuiz = quizData[currentQuestionIndex];

  // Atualiza fundo com a imagem
  quizContainer.style.backgroundImage = `url('${currentQuiz.image}')`;

  // Exibe pergunta
  questionElement.textContent = currentQuiz.question;
  answerElement.style.display = "none"; // Esconde a resposta

  // Inicia temporizador de 8 segundos
  let timeLeft = 8;
  timerText.textContent = `${timeLeft}s`;

  countdown = setInterval(() => {
    timeLeft--;
    timerText.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      // Exibe a resposta após os 8 segundos
      answerElement.textContent = `Resposta: ${currentQuiz.answer}`;
      answerElement.style.display = "block";
    }
  }, 1000);

  // A pergunta permanece por 12 segundos no total
  displayAnswerTimeout = setTimeout(() => {
    nextQuestion();
  }, 12000); // 12 segundos no total (8 + 4 segundos)
}

// Atualiza para a próxima pergunta
function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length;
  displayQuestion();
}

// Inicia a exibição
displayQuestion();
