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
var countdownStart;

timer.textContent = countdown

var questions = [
    {
        question: 'What is Javascript?',
        choiceA: 'A scripting language for Websites.',
        choiceB: 'An API.',
        choiceC: 'A stylesheet for Websites.',
        choiceD: 'A strange animal from space.',
        correctAnswer: 'A'
    },
    {
        question: 'What is a String in Javascript?',
        choiceA: 'Multiple Variables.',
        choiceB: 'A Jquery command.',
        choiceC: 'Stored text in a Variable.',
        choiceD: 'A trail of letters.',
        correctAnswer: 'C'
    },
    {
        question: 'What is an Array in Javascript?',
        choiceA: 'A set of functions.',
        choiceB: 'How you call a function',
        choiceC: 'Just another type of Variable.',
        choiceD: 'A list containing multiple data types, starting from 0.',
        correctAnswer: 'D'
    }
];

function startTimer() {
    countdownStart = setInterval(function counter() {
        countdown--
        timer.textContent = countdown
        if (countdown < 1) {
            clearInterval(countdownStart);
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
        console.log("Correct");
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
    
    
        hideElement(quizEnd);
    
    // show quiz section
    showElement(quizSection);


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

    renderQuestion();
}

function endQuiz() {
    hideElement(quizSection);
    showElement(quizEnd);
    showElement(startBtn);
    clearInterval(countdownStart);
    timer.textContent = countdown
}

startBtn.addEventListener("click", startQuiz);