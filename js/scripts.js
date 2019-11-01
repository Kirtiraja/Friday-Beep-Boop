//BUSINESS LOGIC
















//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    event.preventDefault();

    var userInput = $("#userNumber").val();
    var finalResult = userInput;
    $("p#result").text(finalResult);




      var userSplit = []
      userSplit.push(userInput.split(""));

      console.log(userSplit)

  });
});
