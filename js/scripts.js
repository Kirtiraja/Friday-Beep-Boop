//BUSINESS LOGIC
var userArray = [];
var makeUserArray = function(userInput) {
  for (index = 0; index <= userInput ; index += 1) {
    userArray.push(index);
    console.log(mappedArray)
    var mappedArray = userArray.map(function(number){
      if (number === 1 || number ===3){
        return "beep";
      }
      else {
        return number;
      }
    })
    var joinedArray = mappedArray.join("");
  }
}
// function makeBeep(nummberArray){
//   var numbers = [1, 2, 3];
//   if (numbers.includes(number)) {
//     return number + 1;
//   }
//   else {
//     return number ;
//   }
// }



//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userNumber").val());
    var beepResult = makeUserArray(userInput);
    // var beepResult = makeBeep(userArray);
      $("p#result").text(beepResult);
      console.log(userArray);





    });
  });
