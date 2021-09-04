var messageArea = document.querySelector("#form-wrapper p");
var hamburger = document.querySelector(".hamburger");
window.onscroll = function() {scrollFunction()};

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    document.querySelector("#mobile-menu").classList.toggle("expanded");
  });

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo-ts").style.width = "125px";
    } else {
        document.getElementById("logo-ts").style.width = "200px";
    }
  }

if (!localStorage.getItem("subscribed") == true){
    var subscribe = document.querySelector("#subscribe");
   
    subscribe.addEventListener("click", function(event){
        event.preventDefault();
        var emailAddr = document.querySelector("#email").value;
        if (validateEmail(emailAddr)) {
            localStorage.setItem("subscribed",true);
            
            messageArea.innerHTML = "Thanks for signing up.";
            document.querySelector("#form-wrapper form").classList.add("hidden");
        } else {
            messageArea.innerHTML = "Please enter a valid address.";
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


