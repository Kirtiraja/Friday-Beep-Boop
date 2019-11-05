//BUSINESS LOGIC
//  var numberBeep = function(number) {
//   var numbers = [1];
//   if (numbers.includes(number[0])){
//     return number + "Beep!";
//   }
// }
//
// function sayBeep(userNumber) {
//   var beepSentence = userArray.map(function(userNumber) {
//     return numberBeep(userArray);
//   })
// }

//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    $("ul#result").show(userArray);
    var finalResult = function(resultBeep) {
      return userArray + "Beep!";

    }
    var userInput = parseInt($("#userNumber").val());

    var userArray = [];
    for (index = 0; index <= userInput ; index += 1) {
      userArray.push(index);
    }


    event.preventDefault();

    console.log(userArray);


  });
});

// var beep = [1];
// function giveBeep(number){
  //   if userArray.includes(number[0])){
    //     return + "beep";
    //   };
    // });




    // var userSplit = []
    // userSplit.push(userInput);


    // if (beep.includes(number[0])){
      //   console.log("goodbye")
      //   return
      //     // }
      //   })
      // })
