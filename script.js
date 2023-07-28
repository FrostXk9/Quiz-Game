const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement  = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    //increments to next question
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    //set to 0 to start at first questions array
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// function to show a question
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    //returns collection of answers
    Array.from(answerButtonsElement.children).forEach(button => {
        //checks whether the answer is correct
        setStatusClass(button, button.dataset.correct)
    });
    //checks if theres more questions
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    } else{
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

//removes answer
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//declaring questions
const questions = [
    {
        question: '1.What is the correct way to declare a variable in JavaScript?',
        answers: [
            {text: 'a) var myVariable',correct: false},
            {text: 'b) variable myVariable',correct: false},
            {text: 'c) let myVariable',correct: true},
            {text: 'd) let myvariable',correct: false},
        ]
    },
    {
        question: '2.What is the following output of the code: Console log(3 + "2")',
        answers: [
            {text: 'a) 6',correct: false},
            {text: 'b) 5',correct: false},
            {text: 'c) 32',correct: true},
            {text: 'd) "32"',correct: false},
        ]
    },
    {
        question: '2.What is the following output of the code: Console log(3 + "2")',
        answers: [
            {text: 'a) 6',correct: false},
            {text: 'b) 32',correct: true},
            {text: 'c) 5',correct: false},
            {text: 'd) "32"',correct: false},
        ]
    },
    {
        question: '3.What is the result of the following expression? typeof null',
        answers: [
            {text: 'a) "null"',correct: false},
            {text: 'b) "object"',correct: true},
            {text: 'c) "undefined"',correct: false},
            {text: 'd) "string"',correct: false},
        ]
    },
    {
        question: '4.Which function is used to add an element to the end of an array in JavaScript?',
        answers: [
            {text: 'a) push()',correct: true},
            {text: 'b) unshift()',correct: false},
            {text: 'c) pop()',correct: false},
            {text: 'd) shift()',correct: false},
        ]
    },

]


//     const questions = [
//         new Questions(
//             '1.What is the correct way to declare a variable in JavaScript?',
//             'a) var myVariable',
//             'b) variable myVariable',
//             'c) let myVariable',
//             'd) let myvariable'
//         ),
//         new Questions(
//             '2.What is the following output of the code: Console log(3 + "2")',
//             'a) 5',
//             'b) 32',
//             'c) 6',
//             'd) "32"'
//         ),
//         new Questions(
//             '3.What is the result of the following expression? typeof null',
//             'a) "null"',
//             'b) "object"',
//             'c) "undefined"',
//             'd) "string"'
//         ),
//         new Questions(
//             '4.Which function is used to add an element to the end of an array in JavaScript?',
//             'a) push()',
//             'b) unshift()',
//             'c) pop()',
//             'd) shift()'
//         ),
//         new Questions(
//             '5.What is the purpose of the "addEventlistener" method in JavaScript',
//             'a) To create a new element in the DOM',
//             'b) To remove an event listener from an element',
//             'c) To add an event listener to an element',
//             'd) To modify the styling of an element'
//         ),
//         new Questions(
//             '6.What is the output of the following code: console.log(1 === "1")',
//             'a) true',
//             'b) false',
//             'c) undefined',
//             'd) NaN'
//         ),
//         new Questions(
//             '7.Which of the following  is not a valid JavaScript loop',
//             'a) for loop',
//             'b) while loop',
//             'c) until',
//             'd) do...loop'
//         ),
//         new Questions(
//             '8.How can you convert a string to an integer in JavaScript',
//             'a) parseInt()',
//             'b) toString()',
//             'c) parseFloat()',
//             'd) toInteger()'
//         ),
//         new Questions(
//             '9.What is the purpose of the "querySelector" method in JavaScript?',
//             'a) To select an element from the DOM based on its ID',
//             'b) To select an elements from the DOM',
//             'c) To select an element from the DOM based on its class name',
//             'd) To select the first element from the element from the DOM that matches a specific CSS selector'
//         ),
//         new Questions(
//             '10.What does the "JSON.parse()" function do in JavaScript',
//             'a) Converts a JSON string to a JavaScript object',
//             'b) Converts a JavaScript object to a JSON string',
//             'c) Parses HTML code into a DOM tree',
//             'd) Encrypts data using the JSON format'
//         ),
//     ];

