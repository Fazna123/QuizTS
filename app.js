var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Question = /** @class */ (function () {
    function Question(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    Question.prototype.correctAnswer = function (choice) {
        return choice === this.answer;
    };
    Question.prototype.displayQuestion = function () {
        console.log(this.text);
    };
    Question.prototype.displayChoices = function () {
        for (var i = 0; i < this.choices.length; i++) {
            console.log("".concat(i + 1, ". ").concat(this.choices[i]));
        }
    };
    return Question;
}());
//------------------------------------------------------------------------------------------------------------------
var scienceQuestion = /** @class */ (function (_super) {
    __extends(scienceQuestion, _super);
    function scienceQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    scienceQuestion.prototype.displayQuestionType = function () {
        console.log("Type: Science Question");
    };
    return scienceQuestion;
}(Question));
var litteratureQuestion = /** @class */ (function (_super) {
    __extends(litteratureQuestion, _super);
    function litteratureQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    litteratureQuestion.prototype.displayQuestionType = function () {
        console.log("Type: Litterature Question");
    };
    return litteratureQuestion;
}(Question));
//-------------------------------------------------------------------------------------------------------------------
var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }
    Quiz.prototype.getCurrentQuestion = function () {
        return this.questions[this.questionIndex];
    };
    Quiz.prototype.isEnded = function () {
        return this.questions.length === this.questionIndex;
    };
    Quiz.prototype.guessAnswer = function (answer) {
        if (this.getCurrentQuestion().correctAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    };
    return Quiz;
}());
//----------------------------------------------------------------------------------------------------------------------
function populate(quiz) {
    if (quiz.isEnded()) {
        showScores(quiz);
    }
    else {
        var element = document.getElementById('question');
        if (element !== null) {
            element.innerHTML = quiz.getCurrentQuestion().text;
        }
        quiz.getCurrentQuestion().displayChoices();
        quiz.getCurrentQuestion().displayQuestionType();
        for (var i = 0; i < quiz.getCurrentQuestion().choices.length; i++) {
            var element_1 = document.getElementById('choice' + i);
            if (element_1 !== null) {
                element_1.innerHTML = quiz.getCurrentQuestion().choices[i] || '';
                checkAnswer(quiz, 'btn' + i, quiz.getCurrentQuestion().choices[i]);
            }
        }
        showProgress(quiz);
    }
}
function checkAnswer(quiz, id, answer) {
    var button = document.getElementById(id);
    if (button !== null) {
        button.onclick = function () {
            quiz.guessAnswer(answer);
            populate(quiz);
        };
    }
}
function showScores(quiz) {
    var resultHTML = '<h1>Result</h2>';
    resultHTML += "<h2 id='score'>Your Score: " + quiz.score + "</h2>";
    var element = document.getElementById('quiz');
    if (element !== null) {
        element.innerHTML = resultHTML;
    }
}
function showProgress(quiz) {
    var currentQnNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    if (element !== null) {
        element.innerHTML = 'Question ' + currentQnNumber + ' of ' + quiz.questions.length;
    }
}
var scienceQuestionArray = [
    new scienceQuestion("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"], "Paris"),
    new scienceQuestion("What is the largest mammal on Earth?", ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "Blue Whale"),
    new scienceQuestion("Which planet is known as the Red Planet?", ["Earth", "Mars", "Jupiter", "Venus"], "Mars"),
];
var litteratureQuestionArray = [
    new litteratureQuestion("Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], "William Shakespeare"),
    new litteratureQuestion("Who is the author of 'Pride and Prejudice'?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], "Jane Austen")
];
var quiz = new Quiz(__spreadArray(__spreadArray([], scienceQuestionArray, true), litteratureQuestionArray, true));
populate(quiz);
