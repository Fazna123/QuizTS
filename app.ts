abstract class Question {
    text: string;
    choices: string[];
    answer: string;

    constructor(text: string, choices: string[], answer: string) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    correctAnswer(choice: string): boolean {
        return choice === this.answer;
    }

    displayQuestion(): void {
        console.log(this.text);
    }

    displayChoices(): void {
        for (let i = 0; i < this.choices.length; i++) {
            console.log(`${i + 1}. ${this.choices[i]}`);
        }
    }

    abstract displayQuestionType(): void;
}


//------------------------------------------------------------------------------------------------------------------

class scienceQuestion extends Question {
    displayQuestionType(): void {
        console.log("Type: Science Question");
    }
}



class litteratureQuestion extends Question {
    displayQuestionType(): void {
        console.log("Type: Litterature Question");
    }
}


//-------------------------------------------------------------------------------------------------------------------


class Quiz {
    questions: Question[];
    score: number;
    questionIndex: number;

    constructor(questions: Question[]) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }

    getCurrentQuestion(): Question {
        return this.questions[this.questionIndex];
    }

    isEnded(): boolean {
        return this.questions.length === this.questionIndex;
    }

    guessAnswer(answer: string): void {
        if (this.getCurrentQuestion().correctAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
}


//----------------------------------------------------------------------------------------------------------------------

function populate(quiz: Quiz): void {
    if (quiz.isEnded()) {
        showScores(quiz);
    } else {
        let element = document.getElementById('question');
        if (element !== null) {
            element.innerHTML = quiz.getCurrentQuestion().text;
        }

        quiz.getCurrentQuestion().displayChoices();
        quiz.getCurrentQuestion().displayQuestionType();

        for (let i = 0; i < quiz.getCurrentQuestion().choices.length; i++) {
            let element = document.getElementById('choice' + i);
            if (element !== null) {
                element.innerHTML = quiz.getCurrentQuestion().choices[i] || '';
                checkAnswer(quiz, 'btn' + i, quiz.getCurrentQuestion().choices[i]);
            }
        }

        showProgress(quiz);
    }
}



function checkAnswer(quiz: Quiz, id: string, answer: string): void {
    let button = document.getElementById(id);
    if (button !== null) {
        button.onclick = () => {
            quiz.guessAnswer(answer);
            populate(quiz);
        };
    }
}



function showScores(quiz: Quiz): void {
    let resultHTML = '<h1>Result</h2>';
    resultHTML += "<h2 id='score'>Your Score: " + quiz.score + "</h2>";
    let element = document.getElementById('quiz');
    if (element !== null) {
        element.innerHTML = resultHTML;
    }
}



function showProgress(quiz: Quiz): void {
    let currentQnNumber = quiz.questionIndex + 1;
    let element = document.getElementById('progress');
    if (element !== null) {
        element.innerHTML = 'Question ' + currentQnNumber + ' of ' + quiz.questions.length;
    }
}



const scienceQuestionArray = [
    new scienceQuestion("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"], "Paris"),
    new scienceQuestion("What is the largest mammal on Earth?", ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "Blue Whale"),
    new scienceQuestion("Which planet is known as the Red Planet?", ["Earth", "Mars", "Jupiter", "Venus"], "Mars"),
];



const litteratureQuestionArray = [
    new litteratureQuestion("Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], "William Shakespeare"),
    new litteratureQuestion("Who is the author of 'Pride and Prejudice'?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], "Jane Austen")

];


const quiz = new Quiz([...scienceQuestionArray, ...litteratureQuestionArray]);

populate(quiz);
