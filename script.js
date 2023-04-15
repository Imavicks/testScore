//define prompt so we can respond from our IDE 
const prompt = require('prompt-sync')();
//create a prompt that lets us input our score
let score=parseInt(prompt('Input your score:'));
//create a function that would give feedbacks based on the grade range of the score
function result(){
    if (score >= 0 && score <= 30) {
        console.log("Try harder, your score is low!");
      } else if (score > 30 && score <= 60) {
        console.log("Hey, that's a good score but you can do better!");
      } else if (score > 60 && score <= 100) {
        console.log("Wow, you did great!");
      } else {
        console.log("Please insert a valid score!");
      }
    resetResult();
}
result();
//create a function to reset the user's input
function resetResult(){
    score=parseInt(prompt('input your score:'));
    result();
}
