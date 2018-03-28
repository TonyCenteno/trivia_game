// create objects with questions and answers.

var Q1 = {
    question : "Which was the first professional fighter to beat Mike Tyson?",
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
// create a function to display intro, correct, and wrong divs.
function loadQuestion(){
    for (var i =0 ; i < questions.length; i++){
        document.getElementById()
    }
}
function answerValidation(){
}
function play(){


}
function intro(){
    document.getElementById("intro").style.display = "inline-block";
}
function closeIntro(){
    document.getElementById("intro").style.display = "none";
}
function correct(){
    function getCorrect(){
        document.getElementById("correct").style.display = "inline-block";
    }
    function closeCorrect(){
        document.getElementById("correct").style.display = "none";
    }
    correctCount++;
    getCorrect();
    setTimeout(closeCorrect, 2000);
}
function wrong(){
    function getWrong(){
        document.getElementById("wrong").style.display = "inline-block";
    }
    function closeWrong(){
        document.getElementById("wrong").style.display = "none";
    }
    getWrong();
    setTimeout(closeWrong, 2000);
    wrongCount++;
}
function reset(){

}
// create timer function
// 


intro();
