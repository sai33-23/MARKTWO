var a=require("readline-sync");
var user=a.question("write your name here");
console.log("WELCOME "+user)
console.log("!! A QUIZ ABOUT SHREYA GHOSHAL !!")
console.log("HELLO "+ user +" NOW YOU CAN START") 
console.log("let's see "+ "how much" + user + "know shreya :-")
 
var a=require("readline-sync");  
var score=0

function test(question,answer){
    var user_answer = a.question(question);
    if (user_answer === answer){
        console.log("correct answer")
        score = score+1;
    }else{
        console.log("wrong answer")
    }
    console.log("current score: ",score);

}

var questions = [{
    question : "Shreya's birthday date -",
    answer : "12th march"
},{
    question : "Shreya's home town -",
    answer : "westbengal"
},{
    question : "Shreya's fav. dish -",
    answer : "fishcurry"
},{
    question : "Shreys's first song -",
    answer : "bairipiya"
},{
    question : "shreya's age -",
    answer : "37"
},{
    question : "Shreya started singing in the age of - ",
    answer : "16"
}];

for (var i=0;i<questions.length;i++){
    var currentquestion = questions[i]
    test(currentquestion.question,currentquestion.answer)
}
console.log("##########################")

console.log("YAY! your total score is: ",score)


console.log("check your own score and ping me in Telegram")
console.log("sai : 5")
console.log("munu : 4")

console.log("*THANK YOU FOR PLAYING*")

