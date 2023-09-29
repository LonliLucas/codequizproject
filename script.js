var timer = document.querySelector("#timer")
var countdown = 60
var startBtn = document.querySelector(".startBtn")
var quizSection = document.querySelector('.quiz-screen');
var highscoresSection = document.querySelector('.highscores-screen');
var questionIndex = 0;

timer.textContent = countdown

var questions = [
    {
        question: 'How old are you?',
        choiceA: '10',
        choiceB: '11',
        choiceC: '5',
        choiceD: '8',
        correctAnswer: 'A'
    },
];

let aQuestion = questions[0]; // 
let aChoice = aQuestion.choiceA;
let bChoice = aQuestion.choiceB;
let cChoice = aQuestion.choiceC;
let dChoice = aQuestion.choiceD;

function startTimer() {
    var countdownStart = setInterval(function counter() {
        countdown--
        timer.textContent = countdown
        console.log(countdown)
        if (countdown < 1) {
            clearInterval(countdownStart)
            console.log("It should stop now")
        }
    }, 1000)

}

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {

    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
}


function renderQuestion() {
    var currentQuestion = questions[questionIndex]; // select a question from the array
    var questionText = currentQuestion.question;
    var choiceA = currentQuestion.choiceA;
    var choiceB = currentQuestion.choiceB;
    var choiceC = currentQuestion.choiceC;
    var choiceD = currentQuestion.choiceD;
    var correctAnswer = currentQuestion.correctAnswer;

    var questionHeader = document.querySelector('.question-heading')
    var choiceAElement = document.querySelector('#choiceA')
    var choiceBElement = document.querySelector('#choiceB')
    var choiceCElement = document.querySelector('#choiceC')
    var choiceDElement = document.querySelector('#choiceD')
    
    questionHeader.textContent = questionText;
    choiceAElement.textContent = choiceA;
    choiceBElement.textContent = choiceB;
    choiceCElement.textContent = choiceC;
    choiceDElement.textContent = choiceD;
    

}

function startQuiz() {
    startTimer();

    // hide start button
    hideElement(startBtn);

    // show quiz section
    showElement(quizSection);

    // addEventlistener on click for each choice
    
    // only add eventListener once
    // how to check which answer was clicked
    // which answer is correct

    renderQuestion();
}

startBtn.addEventListener("click", startQuiz) 