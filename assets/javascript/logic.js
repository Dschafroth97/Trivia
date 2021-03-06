// GLOBAL VARIABLES
// ==============================================================
var quizDisplay = $("#quiz-area");
var countStart = 30;
var questions = [{
    question: "Who was Luffy's father figure in place of his actual Dad?",
    answers: ["Red Hair Shanks", "Monkey D. Garp", "Roronoa Zoro", "Monkey D. Dragon"],
    correctAnswer: "Red Hair Shanks",
    image: "assets/images/shanks.gif"
}, {
    question: "Who was the first crew member to join Luffy?",
    answers: ["Nami", "Sanji", "Roronoa Zoro", "Brook"],
    correctAnswer: "Roronoa Zoro",
    image: "assets/images/zoro.gif"
}, {
    question: "What Devil Fruit did Luffy eat on accident?",
    answers: ["Soul-Soul Fruit", "Paw-Paw Fruit", "Op-Op Fruit", "Gum-Gum Fruit"],
    correctAnswer: "Gum-Gum Fruit",
    image: "assets/images/luffyFruit.gif"
}, {
    question: "Who was the King of The Pirates?",
    answers: ["Gol D. Roger", "Blackbeard", "Big Mom", "White Beard"],
    correctAnswer: "Gol D. Roger",
    image: "assets/images/roger.gif"
}, {
    question: "Who helped to teach Luffy such powerful Haki techniques?",
    answers: ["Bartholomew Kuma", "Silvers Rayleigh", "Dr. Hiruluk", "Sengoku"],
    correctAnswer: "Silvers Rayleigh",
    image: "assets/images/rayleigh.gif"
}, {
    question: "What is Luffy's Birthday?",
    answers: ["July 6th", "April 20th", "February 30th", "May 5th"],
    correctAnswer: "May 5th",
    image: "assets/images/luffyKid.gif"
}, {
    question: "What year was One Piece released?",
    answers: ["1997", "2002", "1999", "1994"],
    correctAnswer: "1999",
    image: "assets/images/crew.gif"
}, {
    question: "How long was One Piece originally supposed to last?",
    answers: ["2 years", "5 years", "10 years", "8 years"],
    correctAnswer: "5 years",
    image: "assets/images/onePiece.gif"
}, {
    question: "Who is Luffy's Brother?",
    answers: ["Sanji", "Trafalgar D. Law", "Portgas D. Ace", "Monkey D. Dragon"],
    correctAnswer: "Portgas D. Ace",
    image: "assets/images/ace.gif"
}, {
    question: "Who saved Luffy's Life in the \"Great War\"?",
    answers: ["Red Hair Shanks", "Whitebeard", "Kuzan Aokiji", "Portgas D. Ace"],
    correctAnswer: "Portgas D. Ace",
    image: "assets/images/aceSave.gif"
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
        $("#counter-number").text(quiz.counter);
        if(quiz.counter === 0) {
            console.log("TIMES UP!");
            quiz.timeUp();
        }
    },

    loadQuestion: function() {

        $("#counter-number").text(quiz.counter);

        timer = setInterval(quiz.countdown, 1000);

        quizDisplay.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i=0; i < questions[this.currentQuestion].answers.length;i++) {
            quizDisplay.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i] 
            + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        quiz.counter = countStart;
        $("#counter-number").text(quiz.counter);
        quiz.currentQuestion++;
        quiz.loadQuestion();
    },

    timeUp: function() {
        clearInterval(timer);

        quizDisplay.html("<h2>Out of Time!</h2>");
        quizDisplay.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        quizDisplay.append("<img class='gif' src='" + questions[this.currentQuestion].image + "' />");

        if (quiz.currentQuestion === questions.length - 1) {
            setTimeout(quiz.results, 3 * 1000);
        }
        else {
            setTimeout(quiz.nextQuestion, 3 * 1000);
        }
    },

    results: function() {
        clearInterval(timer);

        $("h2").toggle();

        quizDisplay.html("<h2>All done, here's how you did!</h2>");

        quizDisplay.append("<h3>Correct Answers: " + quiz.correct + "</h3>");
        quizDisplay.append("<h3>Incorrect Answers: " + quiz.incorrect + "</h3>");
        quizDisplay.append("<h3>Unanswered: " + (questions.length - (quiz.incorrect + quiz.correct)) + "</h3>");
        quizDisplay.append("<br><button id='start-over'>Try Again?</button>")
    },

    clicked: function(a) {
        clearInterval(timer);
        if ($(a.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrect();
        }
        else {
            this.answeredIncorrect();
        }
    },

    answeredIncorrect: function() {
        
        quiz.incorrect++;

        clearInterval(timer);

        quizDisplay.html("<h2>Nope!</h2>");
        quizDisplay.append("<h3>The Correct Answer was: " + questions[quiz.currentQuestion].correctAnswer + "</h3>");
        quizDisplay.append("<img class='gif' src='" + questions[quiz.currentQuestion].image + "' />");

        if (quiz.currentQuestion === questions.length - 1) {
            setTimeout(quiz.results, 3 * 1000);
        }
        else {
            setTimeout(quiz.nextQuestion, 3 * 1000);
        }
    },

    answeredCorrect: function() {
        clearInterval(timer);

        quiz.correct++;

        quizDisplay.html("<h2>Correct!</h2>");
        quizDisplay.append("<img class='gif' src='" + questions[quiz.currentQuestion].image + "' />");

        if (quiz.currentQuestion === questions.length - 1) {
            setTimeout(quiz.results, 3 * 1000);
        }
        else {
            setTimeout(quiz.nextQuestion, 3 * 1000);
        }
    },

    reset: function() {
        this.currentQuestion = 0;
        this.counter = countStart;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};
// MAIN PROCESS
// ==============================================================
$(document).on("click", "#start-over", function(){
    $("h2").toggle();
    quiz.reset();
})

$(document).on("click", ".answer-button", function(a) {
    quiz.clicked(a);
});

$(document).on("click", "#start", function() {
    $("#body").css("background-image", "url(assets/images/background2.jpg)");
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'></span> Seconds</h2>");
    quiz.loadQuestion();
});