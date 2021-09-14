var messageArea = document.querySelector("#form-wrapper p");
var hamburger = document.querySelector(".hamburger");
window.onscroll = function() {scrollFunction()};

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    document.querySelector("#mobile-menu").classList.toggle("expanded");
  });

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector("#logo-ts").style.width = "125px";
      document.querySelector("#logo-wrapper img").setAttribute("height","60");
      document.querySelector("ul.desktop").classList.add("fly-on-the-wall");
    } else {
        document.querySelector("#logo-ts").style.width = "200px";
        document.querySelector("ul.desktop").classList.remove("fly-on-the-wall");

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


