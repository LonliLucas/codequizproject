var timer = document.querySelector("#timer");
var countdown = 60;
var startBtn = document.querySelector(".startBtn");
var quizSection = document.querySelector('.quiz-screen');
var highscoresSection = document.querySelector('.highscores-screen');
var questionIndex = 0;
var questionHeader = document.querySelector('.question-heading');
var choiceAElement = document.querySelector('#choiceA');
var choiceBElement = document.querySelector('#choiceB');
var choiceCElement = document.querySelector('#choiceC');
var choiceDElement = document.querySelector('#choiceD');
var quizEnd = document.querySelector(".quiz-end");

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
    {
        question: 'How dumb are you?',
        choiceA: '1',
        choiceB: '2',
        choiceC: '3',
        choiceD: '4',
        correctAnswer: 'C'
    },
    {
        question: 'Did you do the thing',
        choiceA: 'Fuck',
        choiceB: 'You',
        choiceC: 'Dumb',
        choiceD: 'Bitch',
        correctAnswer: 'D'
    }
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
        if (countdown < 1) {
            clearInterval(countdownStart);
            endQuiz();
        }
    }, 1000)

}

function hideElement(element) {

    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
    
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

    var questionHeader = document.querySelector('.question-heading');
    var choiceAElement = document.querySelector('#choiceA');
    var choiceBElement = document.querySelector('#choiceB');
    var choiceCElement = document.querySelector('#choiceC');
    var choiceDElement = document.querySelector('#choiceD');

    questionHeader.textContent = questionText;
    choiceAElement.textContent = choiceA;
    choiceBElement.textContent = choiceB;
    choiceCElement.textContent = choiceC;
    choiceDElement.textContent = choiceD;
}

function biteMe(choice) {
    console.log("bitten");

    if (choice === questions[questionIndex].correctAnswer) {
        console.log("Smite Me");
        if (questionIndex < 2) {
            questionIndex++;
            renderQuestion();
        }
        else {
            endQuiz();
            //End the quiz
        }
    }
    else {
        console.log("ur dumb")

        if (questionIndex < 2) {
            questionIndex++;
            countdown = countdown - 15;
            renderQuestion();
        }
        else {
            countdown = countdown - 15;
            endQuiz();
            //End the quiz
        }
    }
}

function startQuiz() {
    countdown = 60;
    console.log("Quiz started")
    startTimer();

    // hide start button
    hideElement(startBtn);
    
    if(quizEnd) {
        hideElement(quizEnd);
    }
    // show quiz section
    showElement(quizSection);

    // addEventlistener on click for each choice
    // for (i = 0; i < 4; i++) {
    //     choiceNum = ["A", "B", "C", "D"];


    // }


    choiceAElement.addEventListener("click", function () {
        biteMe("A");
    });
    choiceBElement.addEventListener("click", function () {
        biteMe("B");
    });
    choiceCElement.addEventListener("click", function () {
        biteMe("C");
    });
    choiceDElement.addEventListener("click", function () {
        biteMe("D");
    });

    // only add eventListener once
    // how to check which answer was clicked
    // which answer is correct

    renderQuestion();
}

function endQuiz() {
    hideElement(quizSection);
    showElement(quizEnd);
    showElement(startBtn);

}

startBtn.addEventListener("click", startQuiz);