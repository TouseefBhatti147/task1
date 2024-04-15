const questions = [
  {
    question: "What is the capital of U.K.?",
    options: ["London", "Manchester", "Liverpool", "Glasgow"],
    answer: "London",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Madrid", "Rome", "Paris"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "London", "Paris", "Berlin"],
    answer: "Rome",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "London", "Paris", "Berlin"],
    answer: "Madrid",
  },
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsForm = document.getElementById("options");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  optionsForm.innerHTML = current.options
    .map(
      (option, index) => `
        <div>
            <input type="radio" id="option-${index}" name="capital" value="${option}">
            <label for="option-${index}">${option}</label>
        </div>
    `
    )
    .join("");
}

function submitAnswer() {
  const selectedOption = document.querySelector(
    'input[name="capital"]:checked'
  );
  if (!selectedOption) {
    alert("Please select an option.");
    return;
  }
  if (selectedOption.value === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.style.display = "none";
  resultElement.textContent = `You got ${score} out of ${questions.length} correct!`;
  resultElement.style.display = "block";
}

loadQuestion();
