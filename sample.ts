// class Question {
//     text: string;
//     choices: string[];
//     answer: string;

//     constructor(text: string, choices: string[], answer: string) {
//         this.text = text;
//         this.choices = choices;
//         this.answer = answer;
//     }

//     correctAnswer(choice: string): boolean {
//         return choice === this.answer;
//     }
// }

// class Quiz {
//     questions:Question[];
//     score:number;
//     questionIndex:number;


//     constructor(question:Question[]){
//         this.questions = question;
//         this.score=0;
//         this.questionIndex=0;
//     }

//     getCurrentQuestion(){
//         return this.questions[this.questionIndex]
//     }

//     isEnded(){
//         return this.questions.length === this.questionIndex
//     }

//     guessAnswer(answer:string){
        
//         if(this.getCurrentQuestion().correctAnswer(answer)){
//             this.score++
//         }
//         this.questionIndex++;
//     }
// }

// function populate(){
//     if(quiz.isEnded()){
//         showScores()
//     }else{
        
//         let element = document.getElementById('question')
//         if (element !== null) {
//             element.innerHTML = quiz.getCurrentQuestion().text;
//         }

//         let choices = quiz.getCurrentQuestion().choices
//         for(let i=0;i<choices.length;i++){
//             let element = document.getElementById('choice'+i)
//             element!.innerHTML = choices[i] || '';
//             checkAnswer('btn'+i,choices[i])
//         }

//         showProgress()
//     }
// }

// function checkAnswer(id:string,answer:string){
//     let button = document.getElementById(id)
//     if (button !== null) {
//         button.onclick = () => {
//             quiz.guessAnswer(answer);
//             populate();
//         };
//     }
// }

// function showScores(){
//     let resultHTML = '<h1>Result</h2>'
//     resultHTML += "<h2 id='score'>Your Score: "+ quiz.score +"</h2>"
//     let element = document.getElementById('quiz')    
//     if(element !== null){
//         element.innerHTML = resultHTML
//     }
// }

// function showProgress(){
//     let currentQnNumber = quiz.questionIndex+1
//     let element = document.getElementById('progress')
//     if(element !== null){
//         element.innerHTML = 'Question ' + currentQnNumber + ' of ' + quiz.questions.length
//     }
// }

// const questionsArray = [
//     new Question("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"], "Paris"),
//     new Question("Which planet is known as the Red Planet?", ["Earth", "Mars", "Jupiter", "Venus"], "Mars"),
//     new Question("What is the largest mammal on Earth?", ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "Blue Whale"),
//     new Question("Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], "William Shakespeare"),
//     new Question("In which year did the first moon landing occur?", ["1969", "1971", "1980", "1990"], "1969"),
// ];

// const quiz = new Quiz(questionsArray)

// populate()