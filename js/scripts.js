//BUSINESS LOGIC
















//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    
    var userInput = $("#userNumber").val();

    var finalResult = userInput;

    $("p#result").text(finalResult);
    event.preventDefault();
  });
});
