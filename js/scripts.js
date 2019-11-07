//BUSINESS LOGIC
var userArray = [];
var makeUserArray = function(userInput) {
  for (index = 0; index <= userInput ; index += 1) {
    userArray.push(index);
    console.log(mappedArray);
    var mappedArray = userArray.map(function(number){
      if (number === 1 || number ===3){ //put this line of code into a forEach loop so each element in the new array is anaylyzed or a 3,2,or1---
        return "beep";
      }
      else {
        return number;
      }
    })
    var joinedArray = mappedArray.join("");
  }
}

function makeBeep(userArray){
  var numbers = [1, 2, 3];
  if (numbers.includes(number)) {
    return number + 1;
  }
  else {
    return number ;
  }
}



//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userNumber").val());
    var beepResult = makeUserArray(userInput);
    // var beepResult = makeBeep(userArray);
      $("p#result").text(beepResult);





    });
  });
