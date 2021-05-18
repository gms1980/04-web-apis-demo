
// // select all elements
// const start = document.getElementById("start");
// const quiz = document.getElementById("quiz");

// const counter = document.getElementById("counter");
// //const timeGauge = document.getElementById("timeGauge");
// const progress = document.getElementById("progress");
// const scoreDiv = document.getElementById("scoreContainer");
// const timeLeft = document.getElementById("timeLeft");
// const timerEl = document.getElementById('countdown');

// // create our questions
// let questions = [
//     {
//         question : "Commonly used data types DO NOT INCLUDE?",
//         choiceA : "1.Strings",
//         choiceB : "2.Booleans",
//         choiceC : "3.Alerts",
//         choiceD : "4.Numbers",
//         correct : "B"
//     },{
//         question : "The condition if/else statement is enclosed with __________?",
//         choiceA : "1. commas",
//         choiceB : "2. curly brackets",
//         choiceC : "3. parenthiesis",
//         choiceD : "4. square brackets",
//         correct : "C"
//     },{
//         question : "Arrays in JavaScript can be used to store?",
//         choiceA : "1. numbers and strings",
//         choiceB : "2. Other Arrays",
//         choiceC : "3. booleans",
//         choiceD : "4. Wrong",
//         correct : "C"
//     },{
//         question : "Next question goes here",
//         choiceA : "1. numbers and strings",
//         choiceB : "2. Other Arrays",
//         choiceC : "3. booleans",
//         choiceD : "4. Wrong",
//         correct : "C"
//     }
// ];

// // create some variables

// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let count = 0;
// const timeleft = 10; // 10s

// let TIMER;
// let score = 0;

// // render a question
// function renderQuestion(){
//     let q = questions[runningQuestion];
    
//     question.innerHTML = "<p>"+ q.question +"</p>";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
//     choiceD.innerHTML = q.choiceD;
// }

// start.addEventListener("click",startQuiz);

// // start quiz
// var myTimer;
// function clock() {
//     myTimer = setInterval(myClock, 1000);
//     function myClock() {
//         document.getElementById("timer").innerHTML = c--;
//         if (c == 0) {
//         clearInterval(myTimer);
//        }
//     }
// }





// // counter render 
// var timeInterval = setInterval(function() {
//   // As long as the `timeLeft` is greater than 1
//   if (timeLeft > 1) {
//     // Set the `textContent` of `timerEl` to show the remaining seconds
//     timerEl.textContent = timeLeft + ' seconds remaining';
//     // Decrement `timeLeft` by 1
//     timeLeft--;
//   } else if (timeLeft === 1) {
//     // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//     timerEl.textContent = timeLeft + ' second remaining';
//     timeLeft--;
//   } else {
    
//     clearInterval(timeInterval);
   
//   }
// }, 1000);

// // function renderCounter(){
//     if(count <= timeleft){
//         counter.innerHTML = count;
//         //timeGauge.style.width = count * gaugeUnit;
//         count++
//     }else{
//         count = 0;
        
//              clearInterval(TIMER);
//              scoreRender();
//         }
    

// // checkAnwer

// function checkAnswer(answer){

//     if(runningQuestion < lastQuestion){
//         runningQuestion++;
//         renderQuestion();
//     }else{
//         // end the quiz and show the score
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }



// // score render
// function scoreRender(){
//     scoreDiv.style.display = "block";
    
//     // calculate the amount of question percent answered by the user
//     const scorePerCent = Math.round(100 * score/questions.length);
    
   
//     scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
// }
// Countdown timer
  
// variables for page elements
// time and score
let timeEl = document.querySelector("p.time");
let secondsLeft = 75;
let scoreEl = document.querySelector("#score");

// sections
// section intro
const introEl = document.querySelector("#intro");

// section questions
//question section
const questionsEl = document.querySelector("#questions");
//where question goes
let questionEl = document.querySelector("#question");
// how many questions they have answered
let questionCount = 0;
// div yaynay
const yaynayEl = document.querySelector("#yaynay");

// section final
const finalEl = document.querySelector("#final");
// user initials
let initialsInput = document.querySelector("#initials");

// section highscores
const highscoresEl = document.querySelector("#highscores");
// ordered list
let scoreListEl = document.querySelector("#score-list");
// array of scores
let scoreList = [];

// buttons
// start
const startBtn = document.querySelector("#start");
// answer button class
const ansBtn = document.querySelectorAll("button.ansBtn")
// answer1
const ans1Btn = document.querySelector("#answer1");
// answer2
const ans2Btn = document.querySelector("#answer2");
// answer3
const ans3Btn = document.querySelector("#answer3");
// answer4
const ans4Btn = document.querySelector("#answer4");
// submit-score
const submitScrBtn = document.querySelector("#submit-score");
// goback
const goBackBtn = document.querySelector("#goback");
// clearscores
const clearScrBtn = document.querySelector("#clearscores");
// view-scores
const viewScrBtn = document.querySelector("#view-scores");

//Array of Questions
const questions = [ // array of objects
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];


// Functions

// timer
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

// start quiz with timer and set up questions
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

// function to set question; takes in a count and displays the next question/answers
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

// function to check answer and then move to next question
function checkAnswer(event) {
    event.preventDefault();

    // show section for yaynay and append message
    yaynayEl.style.display = "block";
    let p = document.createElement("p");
    yaynayEl.appendChild(p);

    // time out after 1 second
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    // answer checker
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    // increment so the questions index is increased
    if (questionCount < questions.length) {
        questionCount++;
    }
    // call setQuestion to bring in next question when any ansBtn is clicked
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    // sort scores
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // Add to local storage
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

// clear scores
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

// EventListeners
// Start timer and display first question when click start quiz
startBtn.addEventListener("click", startQuiz);

// Check answers loop
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

// Add score
submitScrBtn.addEventListener("click", addScore);

// Go Back Button
goBackBtn.addEventListener("click", function () {
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 75;
    timeEl.textContent = `Time:${secondsLeft}s`;
});

// Clear the scores
clearScrBtn.addEventListener("click", clearScores);

// View/Hide High Scores Button
viewScrBtn.addEventListener("click", function () {
    if (highscoresEl.style.display === "none") {
        highscoresEl.style.display = "block";
    } else if (highscoresEl.style.display === "block") {
        highscoresEl.style.display = "none";
    } else {
        return alert("No scores to show.");
    }
});














