// GLOBAL VARIABLES
// ==============================================================
var quizDisplay = $("#quiz-area");
var countStart = 30;
var questions = [{
    question: "Who was Luffy's father figure in place of his actual Dad?",
    answers: ["Red Hair Shanks", "Monkey D. Garp", "Roronoa Zoro", "Monkey D. Dragon"],
    correctAnswer: "Red Hair Shanks",
    image: ""
}, {
    question: "Who was the first crew member to join Luffy?",
    answers: ["Nami", "Sanji", "Roronoa Zoro", "Brook"],
    correctAnswer: "Roronoa Zoro",
    image: ""
}, {
    question: "What Devil Fruit did Luffy eat on accident?",
    answers: ["Soul-Soul Fruit", "Paw-Paw Fruit", "Op-Op Fruit", "Gum-Gum Fruit"],
    correctAnswer: "Gum-Gum Fruit",
    image: ""
}, {
    question: "Who was the King of The Pirates?",
    answers: ["Big Mom", "Blackbeard", "Gol D. Roger", "White Beard"],
    correctAnswer: "Gol D. Roger",
    image: ""
}, {
    question: "Who helped to teach Luffy such powerful Haki techniques?",
    answers: ["Bartholomew Kuma", "Silvers Rayleigh", "Dr. Hiruluk", "Sengoku"],
    correctAnswer: "Silvers Rayleigh",
    image: ""
}, {
    question: "What is Luffy's Birthday?",
    answers: ["July 6th", "April 20th", "May 5th", "February 30th"],
    correctAnswer: "May 5th",
    image: ""
}, {
    question: "What year was One Piece released?",
    answers: ["1997", "2002", "1999", "1994"],
    correctAnswer: "1999",
    image: ""
}, {
    question: "How long was One Piece originally supposed to last?",
    answers: ["2 years", "5 years", "10 years", "8 years"],
    correctAnswer: "5 years",
    image: ""
}, {
    question: "Who is Luffy's Brother?",
    answers: ["Sanji", "Trafalgar D. Law", "Portgas D. Ace", "Monkey D. Dragon"],
    correctAnswer: "Portgas D. Ace",
    image: ""
}, {
    question: "Who saved Luffy's Life in the \"Great War\"?",
    answers: ["Red Hair Shanks", "Whitebeard", "Kuzan Aokiji", "Portgas D. Ace"],
    correctAnswer: "Portgas D. Ace",
    image: ""
}, 

];

// Variable for SetInterval
var timer;


// FUNCTIONS
// ==============================================================
var quiz = {

    questions: questions,
    currentQuestion: 0,
    counter: countStart,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        quiz.counter--;
        $("counter-number").text(quiz.counter);
        if(quiz.counter === 0) {
            console.log("TIMES UP!");
            quiz.timeUp();
        }
    },

    loadQuestion: function() {

        timer = setInterval(quiz.countdown, 1000);

        quizDisplay.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i=0; i < questions[this.currentQuestion].answers.length;i++) {
            quizDisplay.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i])
        }
    }

    
};
// MAIN PROCESS
// ==============================================================
$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    quiz.loadQuestion();
});