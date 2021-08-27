
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
if (!localStorage.getItem("subscribed") == true){
    var subscribe = document.querySelector("#subscribe");
   
    subscribe.addEventListener("click", function(event){
        event.preventDefault();
        var emailAddr = document.querySelector("#email").value;
        console.log("about to ask if it's true")
        if (validateEmail(emailAddr)) {
            localStorage.setItem("subscribed",true);
            console.log("it's true");
            var messageArea = document.querySelector("#form-wrapper p");
            messageArea.innerHTML = "Thanks for signing up.";
            document.querySelector("#form-wrapper form").classList.add("hidden");
        } else {
            // add a message to the dom
            // put focus on form field
        } 
    });
} else {
    var messageArea = document.querySelector("#form-wrapper p");
    messageArea.innerHTML = "Thanks for signing up."
    document.querySelector("#form-wrapper form").classList.add("hidden");
}
  
function validateEmail(input) {
    console.log("Here's the input " + input);
    var valid = false;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(input);
    if (input.match(validRegex)) {
        valid = true;
    } 
    return valid;
}


