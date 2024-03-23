var Question = /** @class */ (function () {
    function Question(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    Question.prototype.correctAnswer = function (choice) {
        return choice === this.answer;
    };
    return Question;
}());
var Quiz = /** @class */ (function () {
    function Quiz(question) {
        this.questions = question;
        this.score = 0;
        this.questionIndex = 0;
    }
    Quiz.prototype.getQuestionIndex = function () {
        return this.questions[this.questionIndex];
    };
    Quiz.prototype.isEnded = function () {
        return this.questions.length === this.questionIndex;
    };
    Quiz.prototype.guessAnswer = function (answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    };
    return Quiz;
}());
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById('question');
        if (element !== null) {
            element.innerHTML = quiz.getQuestionIndex().text;
        }
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element_1 = document.getElementById('choice' + i);
            element_1.innerHTML = choices[i] || '';
            checkAnswer('btn' + i, choices[i]);
        }
        showProgress();
    }
}
function checkAnswer(id, answer) {
    var button = document.getElementById(id);
    if (button !== null) {
        button.onclick = function () {
            quiz.guessAnswer(answer);
            populate();
        };
    }
}
function showScores() {
    var resultHTML = '<h1>Result</h2>';
    resultHTML += "<h2 id='score'>Your Score: " + quiz.score + "</h2>";
    var element = document.getElementById('quiz');
    if (element !== null) {
        element.innerHTML = resultHTML;
    }
}
function showProgress() {
    var currentQnNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    if (element !== null) {
        element.innerHTML = 'Question ' + currentQnNumber + ' of ' + quiz.questions.length;
    }
}
var questionsArray = [
    new Question("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"], "Paris"),
    new Question("Which planet is known as the Red Planet?", ["Earth", "Mars", "Jupiter", "Venus"], "Mars"),
    new Question("What is the largest mammal on Earth?", ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "Blue Whale"),
    new Question("Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], "William Shakespeare"),
    new Question("In which year did the first moon landing occur?", ["1969", "1971", "1980", "1990"], "1969"),
];
var quiz = new Quiz(questionsArray);
populate();
