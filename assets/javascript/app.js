// create objects with questions and answers.

var Q1 = {
    question : "Who was the first professional fighter to beat Mike Tyson?",
    choices : ["Mitch Blood Green", "Razor Ruddock", "Evander Holyfield", "Buster Douglas"],
    correctAn : "Buster Douglas"
};
var Q2 = {
    question : "In what round did Mike Tyson knock out Michael Spinks in 1988?",
    choices : ["Third Round","First Round", "Fifth Round", "Tenth Round"],
    correctAn : "First Round"
};
var Q3 = {
    question : "Which fighter was the first to finish a fight with Mike Tyson?",
    choices : ["James Tillis", "Hector Mercedes", "Mitch Green", "Sammy Scaff"],
    correctAn : "James Tillis"
};
var Q4 = {
    question : "In what city did Mike Tyson lose his title to Buster Douglas?",
    choices : ["Tokyo", "Singapore", "Atlantic City", "Las Vegas"],
    correctAn :"Tokyo"
};
var Q5 = {
    question : "What round was Mike Tyson disqualified in for biting Holyfield's ear?",
    choices : ["10th", "7th", "1st", "3rd"],
    correctAn :"3rd"
};
var Q6 = {
    question : "What is Mike Tyson's middle name?",
    choices : ["George", "Cus", "Gerard", "Bobby"],
    correctAn :"Gerard"
};
var Q7 = {
    question : "What was Mike Tyson's record at the end of his first pro-boxing year?",
    choices : ["15 Wins 3 Losses", "15 Wins 0 Losses", "5 Wins 1 Loss", "3 Wins 0 Losses"],
    correctAn :"15 Wins 0 Losses"
};
var Q8 = {
    question : "Who did Mike Tyson defeat to win his first WBC heavyweight title?",
    choices : ["Larry Holmes", "Michael Spinks", 'James "Buster" Douglas', "Trevor Berbick"],
    correctAn :"Trevor Berbick"
};
var Q9 = {
    question : "Who did Mike Tyson defeat in 1987 to win the WBA title?",
    choices : ["Henry Tillman", "Evander Holyfield", 'James "Bonecrusher" Smith', "Frank Bruno"],
    correctAn :'James "Bonecrusher" Smith'
};
var Q10 = {
    question : "What was Mike Tyson arrested for in 1979?",
    choices : ["Illegal Gambling", "Bank Robbery", "Stealing A Purse", "Mail Fraud"],
    correctAn :"Stealing A Purse"
};
var Q11 = {
    question : "In what round did James Buster Douglas knock out and defeat Mike Tyson?",
    choices : ["5th Round", "12th Round", "1st Round", "10th Round"],
    correctAn :"10th Round"
};
var Q12 = {
    question : "The first Mike Tyson-Evander Holyfield fight was sponsored by which beer?",
    choices : ["St. Ides Gold", "Budweiser", "Michelob Light", "Schlitz Malt Liquor"],
    correctAn :"St. Ides Gold"
};
var Q13 = {
    question : "Who was Mike Tyson's first professional opponent?",
    choices : ["Lorenzo Canaday", "Hector Mercedes", "Jesse Furguson", "Nate Tubbs"],
    correctAn :"Hector Mercedes"
};
var Q14 = {
    question : "Who bought boxer Mike Tyson's Connecticut estate?",
    choices : ["Kelly Clarkson", "Josh Groban", "Sean Combs", "50 Cent"],
    correctAn :"50 Cent"
};
var Q15 = {
    question : "What actress was boxer Mike Tyson once married to?",
    choices : ["Robin Givens", "Marla Gibbs", "Lisa Bonet", "Halle Berry"],
    correctAn :"Robin Givens"
};
var Q16 = {
    question : "How long was the sentence Mike Tyson received for his rape conviction in 1992?",
    choices : ["Ten Years", "Twenty-Five Years", "Thirty Years", "Six Years"],
    correctAn :"Six Years"
};

// create variebles for winning and losing answers.
var questions = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16];
var wrongCount = 0;
var correctCount = 0;
var unasweredCount = 0;
var i = 1;
var timeLeft = 31;
var timerId = setInterval(countdown, 1000);


// in your click function, call clearTimeout

function countdown() {
  if (timeLeft == 0) {
    outOfTime();
  } else {
    document.getElementById("timer").innerHTML = timeLeft;
    timeLeft--;
  }
}
// then call setTimeout again to reset the timer
console.log(i);
console.log(wrongCount);
console.log(correctCount);
// create a function to display intro, correct, and wrong divs.
function loadQuestion(){
    timeLeft = 31;
    countdown();
        if (i === 1){
        
        document.getElementById("currQuestion").innerHTML = Q1.question;
        document.getElementById("option1").innerHTML = Q1.choices[0];
        document.getElementById("option2").innerHTML = Q1.choices[1];
        document.getElementById("option3").innerHTML = Q1.choices[2];
        document.getElementById("option4").innerHTML = Q1.choices[3];
        console.log(Q1.correctAn);
    }
    else if (i === 2){
        document.getElementById("currQuestion").innerHTML = Q2.question;
        document.getElementById("option1").innerHTML = Q2.choices[0];
        document.getElementById("option2").innerHTML = Q2.choices[1];
        document.getElementById("option3").innerHTML = Q2.choices[2];
        document.getElementById("option4").innerHTML = Q2.choices[3];
        console.log(Q2.correctAn);
    }
    else if (i === 3){
        document.getElementById("currQuestion").innerHTML = Q3.question;
        document.getElementById("option1").innerHTML = Q3.choices[0];
        document.getElementById("option2").innerHTML = Q3.choices[1];
        document.getElementById("option3").innerHTML = Q3.choices[2];
        document.getElementById("option4").innerHTML = Q3.choices[3];
        console.log(Q3.correctAn);
    }
    else if (i === 4){
        document.getElementById("currQuestion").innerHTML = Q4.question;
        document.getElementById("option1").innerHTML = Q4.choices[0];
        document.getElementById("option2").innerHTML = Q4.choices[1];
        document.getElementById("option3").innerHTML = Q4.choices[2];
        document.getElementById("option4").innerHTML = Q4.choices[3];
        console.log(Q4.correctAn);
    }
    else if (i === 5){
        document.getElementById("currQuestion").innerHTML = Q5.question;
        document.getElementById("option1").innerHTML = Q5.choices[0];
        document.getElementById("option2").innerHTML = Q5.choices[1];
        document.getElementById("option3").innerHTML = Q5.choices[2];
        document.getElementById("option4").innerHTML = Q5.choices[3];
        console.log(Q5.correctAn);
    }
    else if (i === 6){
        document.getElementById("currQuestion").innerHTML = Q6.question;
        document.getElementById("option1").innerHTML = Q6.choices[0];
        document.getElementById("option2").innerHTML = Q6.choices[1];
        document.getElementById("option3").innerHTML = Q6.choices[2];
        document.getElementById("option4").innerHTML = Q6.choices[3];
        console.log(Q6.correctAn);
    }
    else if (i === 7){
        document.getElementById("currQuestion").innerHTML = Q7.question;
        document.getElementById("option1").innerHTML = Q7.choices[0];
        document.getElementById("option2").innerHTML = Q7.choices[1];
        document.getElementById("option3").innerHTML = Q7.choices[2];
        document.getElementById("option4").innerHTML = Q7.choices[3];
        console.log(Q7.correctAn);
    }
    else if (i === 8){
        document.getElementById("currQuestion").innerHTML = Q8.question;
        document.getElementById("option1").innerHTML = Q8.choices[0];
        document.getElementById("option2").innerHTML = Q8.choices[1];
        document.getElementById("option3").innerHTML = Q8.choices[2];
        document.getElementById("option4").innerHTML = Q8.choices[3];
        console.log(Q8.correctAn);
    }
    else if (i === 9){
        document.getElementById("currQuestion").innerHTML = Q9.question;
        document.getElementById("option1").innerHTML = Q9.choices[0];
        document.getElementById("option2").innerHTML = Q9.choices[1];
        document.getElementById("option3").innerHTML = Q9.choices[2];
        document.getElementById("option4").innerHTML = Q9.choices[3];
        console.log(Q9.correctAn);
    }
    else if (i === 10){
        document.getElementById("currQuestion").innerHTML = Q10.question;
        document.getElementById("option1").innerHTML = Q10.choices[0];
        document.getElementById("option2").innerHTML = Q10.choices[1];
        document.getElementById("option3").innerHTML = Q10.choices[2];
        document.getElementById("option4").innerHTML = Q10.choices[3];
        console.log(Q10.correctAn);
    }
    else if (i === 11){
        document.getElementById("currQuestion").innerHTML = Q11.question;
        document.getElementById("option1").innerHTML = Q11.choices[0];
        document.getElementById("option2").innerHTML = Q11.choices[1];
        document.getElementById("option3").innerHTML = Q11.choices[2];
        document.getElementById("option4").innerHTML = Q11.choices[3];
        console.log(Q11.correctAn);
    }
    else if (i === 12){
        document.getElementById("currQuestion").innerHTML = Q12.question;
        document.getElementById("option1").innerHTML = Q12.choices[0];
        document.getElementById("option2").innerHTML = Q12.choices[1];
        document.getElementById("option3").innerHTML = Q12.choices[2];
        document.getElementById("option4").innerHTML = Q12.choices[3];
        console.log(Q12.correctAn);
    }
    else if (i === 13){
        document.getElementById("currQuestion").innerHTML = Q13.question;
        document.getElementById("option1").innerHTML = Q13.choices[0];
        document.getElementById("option2").innerHTML = Q13.choices[1];
        document.getElementById("option3").innerHTML = Q13.choices[2];
        document.getElementById("option4").innerHTML = Q13.choices[3];
        console.log(Q13.correctAn);
    }
    else if (i === 14){
        document.getElementById("currQuestion").innerHTML = Q14.question;
        document.getElementById("option1").innerHTML = Q14.choices[0];
        document.getElementById("option2").innerHTML = Q14.choices[1];
        document.getElementById("option3").innerHTML = Q14.choices[2];
        document.getElementById("option4").innerHTML = Q14.choices[3];
        console.log(Q14.correctAn);
    }
    else if (i === 15){
        document.getElementById("currQuestion").innerHTML = Q15.question;
        document.getElementById("option1").innerHTML = Q15.choices[0];
        document.getElementById("option2").innerHTML = Q15.choices[1];
        document.getElementById("option3").innerHTML = Q15.choices[2];
        document.getElementById("option4").innerHTML = Q15.choices[3];
        console.log(Q15.correctAn);
    }
    else if (i === 16){
        document.getElementById("currQuestion").innerHTML = Q16.question;
        document.getElementById("option1").innerHTML = Q16.choices[0];
        document.getElementById("option2").innerHTML = Q16.choices[1];
        document.getElementById("option3").innerHTML = Q16.choices[2];
        document.getElementById("option4").innerHTML = Q16.choices[3];
        console.log(Q16.correctAn);

    }
}
function answerValidation1(){
    if (document.getElementById("option1").innerHTML == Q1.correctAn || document.getElementById("option1").innerHTML == Q2.correctAn || document.getElementById("option1").innerHTML == Q3.correctAn || document.getElementById("option1").innerHTML == Q4.correctAn || document.getElementById("option1").innerHTML == Q5.correctAn || document.getElementById("option1").innerHTML == Q6.correctAn || document.getElementById("option1").innerHTML == Q7.correctAn || document.getElementById("option1").innerHTML == Q8.correctAn || document.getElementById("option1").innerHTML == Q9.correctAn || document.getElementById("option1").innerHTML == Q10.correctAn || document.getElementById("option1").innerHTML == Q11.correctAn || document.getElementById("option1").innerHTML == Q12.correctAn || document.getElementById("option1").innerHTML == Q13.correctAn || document.getElementById("option1").innerHTML == Q14.correctAn || document.getElementById("option1").innerHTML == Q15.correctAn || document.getElementById("option1").innerHTML == Q16.correctAn){
            correct();
            i++;
            correctCount++;
            if (i == 17){
            correct();
            finalScore();
        }
        timeLeft = 31;
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
    else {
            wrong();
            i++;
            wrongCount++;
            if (i == 17){
            wrong();
            finalScore();
        }
        timeLeft = 31;
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
}
function answerValidation2(){
    if (document.getElementById("option2").innerHTML == Q1.correctAn || document.getElementById("option2").innerHTML == Q2.correctAn || document.getElementById("option2").innerHTML == Q3.correctAn || document.getElementById("option2").innerHTML == Q4.correctAn || document.getElementById("option2").innerHTML == Q5.correctAn || document.getElementById("option2").innerHTML == Q6.correctAn || document.getElementById("option2").innerHTML == Q7.correctAn || document.getElementById("option2").innerHTML == Q8.correctAn || document.getElementById("option2").innerHTML == Q9.correctAn || document.getElementById("option2").innerHTML == Q10.correctAn || document.getElementById("option2").innerHTML == Q11.correctAn || document.getElementById("option2").innerHTML == Q12.correctAn || document.getElementById("option2").innerHTML == Q13.correctAn || document.getElementById("option2").innerHTML == Q14.correctAn || document.getElementById("option2").innerHTML == Q15.correctAn || document.getElementById("option2").innerHTML == Q16.correctAn){
            correct();
            i++;
            correctCount++;
            if (i == 17){
            correct();
            finalScore();
        }
        timeLeft = 31;
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
    else {
            wrong();
            i++;
            wrongCount++;
            if (i == 17){
            wrong();
            finalScore();
        }
        timeLeft = 31;
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
}
function answerValidation3(){
    if (document.getElementById("option3").innerHTML == Q1.correctAn || document.getElementById("option3").innerHTML == Q2.correctAn || document.getElementById("option3").innerHTML == Q3.correctAn || document.getElementById("option3").innerHTML == Q4.correctAn || document.getElementById("option3").innerHTML == Q5.correctAn || document.getElementById("option3").innerHTML == Q6.correctAn || document.getElementById("option3").innerHTML == Q7.correctAn || document.getElementById("option3").innerHTML == Q8.correctAn || document.getElementById("option3").innerHTML == Q9.correctAn || document.getElementById("option3").innerHTML == Q10.correctAn || document.getElementById("option3").innerHTML == Q11.correctAn || document.getElementById("option3").innerHTML == Q12.correctAn || document.getElementById("option3").innerHTML == Q13.correctAn || document.getElementById("option3").innerHTML == Q14.correctAn || document.getElementById("option3").innerHTML == Q15.correctAn || document.getElementById("option3").innerHTML == Q16.correctAn){
            correct();
            i++;
            correctCount++;
            if (i == 17){
            correct();
            finalScore();
        }
        timeLeft = 31;
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
    else {
            wrong();
            i++;
            wrongCount++;
            if (i == 17){
            wrong();
            finalScore();
        }
        timeLeft = 31;
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
}
function answerValidation4(){
    if (document.getElementById("option4").innerHTML == Q1.correctAn || document.getElementById("option4").innerHTML == Q2.correctAn || document.getElementById("option4").innerHTML == Q3.correctAn || document.getElementById("option4").innerHTML == Q4.correctAn || document.getElementById("option4").innerHTML == Q5.correctAn || document.getElementById("option4").innerHTML == Q6.correctAn || document.getElementById("option4").innerHTML == Q7.correctAn || document.getElementById("option4").innerHTML == Q8.correctAn || document.getElementById("option4").innerHTML == Q9.correctAn || document.getElementById("option4").innerHTML == Q10.correctAn || document.getElementById("option4").innerHTML == Q11.correctAn || document.getElementById("option4").innerHTML == Q12.correctAn || document.getElementById("option4").innerHTML == Q13.correctAn || document.getElementById("option4").innerHTML == Q14.correctAn || document.getElementById("option4").innerHTML == Q15.correctAn || document.getElementById("option4").innerHTML == Q16.correctAn){
            correct();
            i++;
            correctCount++;
            if (i == 17){
            correct();
            finalScore();
        }
        timeLeft = 31;  
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
    else {
            wrong();
            i++;
            wrongCount++;
            if (i == 17){
            wrong();
            finalScore();
        }
        timeLeft = 31;
        loadQuestion();

console.log(wrongCount);
console.log(correctCount);
    }
}
function finalScore(){
    document.getElementById("finalScore").style.display = "inline-block";
    document.getElementById("correctAmount").innerHTML = correctCount;
    document.getElementById("wrongAmount").innerHTML = wrongCount;
    document.getElementById("unanswered").innerHTML = unasweredCount;
}
function closeFinalScore(){
    reset();
    loadQuestion();
    document.getElementById("finalScore").style.display = "none";
}
function intro(){
    timeLeft = 9000000000;
    document.getElementById("intro").style.display = "inline-block";
}
function closeIntro(){
    document.getElementById("intro").style.display = "none";
    timeLeft = 30;
    loadQuestion();
}
function correct(){
    function getCorrect(){
        document.getElementById("correct").style.display = "inline-block";
    }
    function closeCorrect(){
        document.getElementById("correct").style.display = "none";
    }
    getCorrect();
    setTimeout(closeCorrect, 1500);
}
function wrong(){
    function getWrong(){
        document.getElementById("wrong").style.display = "inline-block";
    }
    function closeWrong(){
        document.getElementById("wrong").style.display = "none";
    }
    getWrong();
    setTimeout(closeWrong, 1500);
}
function outOfTime(){
    function getOutOfTime(){
        document.getElementById("outOfTime").style.display = "inline-block";
    }
    function closeOutOfTime(){
        document.getElementById("outOfTime").style.display = "none";
    }
    getOutOfTime();
    i++;
    setTimeout(closeOutOfTime, 1500);
    unasweredCount++;
    if (i == 17){
        finalScore();
    }
    timeLeft = 31;
    loadQuestion();
}
// function startTimer(){
//     setTimeout(outOfTime, 3000);
// }
// function stopTimer(){
//     clearTimeout(outOfTime);
// }
function reset(){
    wrongCount = 0;
    correctCount = 0;
    unasweredCount = 0;
    i = 1;
}
// create timer function
intro();

