
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
//const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const timeLeft = document.getElementById("timeLeft");
const timerEl = document.getElementById('countdown');

// create our questions
let questions = [
    {
        question : "Commonly used data types DO NOT INCLUDE?",
        choiceA : "1.Strings",
        choiceB : "2.Booleans",
        choiceC : "3.Alerts",
        choiceD : "4.Numbers",
        correct : "B"
    },{
        question : "The condition if/else statement is enclosed with __________?",
        choiceA : "1. commas",
        choiceB : "2. curly brackets",
        choiceC : "3. parenthiesis",
        choiceD : "4. square brackets",
        correct : "C"
    },{
        question : "Arrays in JavaScript can be used to store?",
        choiceA : "1. numbers and strings",
        choiceB : "2. Other Arrays",
        choiceC : "3. booleans",
        choiceD : "4. Wrong",
        correct : "C"
    },{
        question : "Next question goes here",
        choiceA : "1. numbers and strings",
        choiceB : "2. Other Arrays",
        choiceC : "3. booleans",
        choiceD : "4. Wrong",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const timeleft = 10; // 10s

let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
        clearInterval(myTimer);
       }
    }
}





// counter render 
var timeInterval = setInterval(function() {
  // As long as the `timeLeft` is greater than 1
  if (timeLeft > 1) {
    // Set the `textContent` of `timerEl` to show the remaining seconds
    timerEl.textContent = timeLeft + ' seconds remaining';
    // Decrement `timeLeft` by 1
    timeLeft--;
  } else if (timeLeft === 1) {
    // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    timerEl.textContent = timeLeft + ' second remaining';
    timeLeft--;
  } else {
    
    clearInterval(timeInterval);
   
  }
}, 1000);

// function renderCounter(){
    if(count <= timeleft){
        counter.innerHTML = count;
        //timeGauge.style.width = count * gaugeUnit;
        count++
    }else{
        count = 0;
        
             clearInterval(TIMER);
             scoreRender();
        }
    

// checkAnwer

function checkAnswer(answer){

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}



// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
   
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}















