//BUSINESS LOGIC
















//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    event.preventDefault();
    $("p#result").text(finalResult);
    var finalResult = userInput;

    var userInput = parseInt($("#userNumber").val());

     var userArray = [];
     for (index = 0; index <= userInput ; index += 1) {
       userArray.push(index);
     }
       console.log("hello")
   // if (beep.includes(number[0])){
       //   console.log("goodbye")
       //   return
   //     // }
   //   })
   // })
     console.log(userArray);

      // var userSplit = []
      // userSplit.push(userInput);

      // console.log(userSplit)

  });
});


function giveBeep(number){
  var beep = [1];
  userArray.map(function(number){
    if (beep.includes(number[0])){
      return + "beep";
    };
  });
};
