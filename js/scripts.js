//BUSINESS LOGIC

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
    // var beepResult = makeBeep(userArray);
    var userArray = [];
    for (index = 0; index <= userInput ; index += 1) {
      userArray.push(index);
    var mappedArray = userArray.map(function(number){
      if (number === 1 || number ===3){
        return "beep";
      }
      else {
        return number;
      }
    })
    var joinedArray = mappedArray.join("");
      $("p#result").text(mappedArray);
    }



    console.log(userArray);


  });
});
