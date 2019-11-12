//BUSINESS LOGIC
function beepSentence(userInput) {
  if (isNaN(userInput) === true || userInput < 1) {
    return alert ("please enter number.");
  }

  var userArray = [];
  for (index = 0; index <= userInput ; index += 1) {
    userArray.push(index);

  }
  var makeBeeps = [];
  userArray.forEach(function(number){
    if (number.toString().includes("3") === true) {
      makeBeeps.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if  (number.toString().includes("2") === true){
      makeBeeps.push("Boop!");
    }
    else if (number.toString().includes("1") === true) {
      makeBeeps.push("Beep!");
    }
    else {
      makeBeeps.push(number);
    }
  });

  return makeBeeps;
}



//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userNumber").val());
    var beepResult = beepSentence(userInput);
      $("p#result").text(beepResult);





    });
  });
