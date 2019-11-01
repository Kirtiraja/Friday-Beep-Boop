//BUSINESS LOGIC
















//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    event.preventDefault();
    $("p#result").text(finalResult);
    var finalResult = userInput;

    var userInput = parseInt($("#userNumber").val());
    var beep = 1
     var userArray = [];
     for (index = 0; index <= userInput ; index += 1) {
       userArray.push(index);
     }
     userArray.forEach(function(number){
       if (beep.includes(number[0])){
         return "Beep!"
       }
     })
     console.log(userArray);

      // var userSplit = []
      // userSplit.push(userInput);

      // console.log(userSplit)

  });
});
