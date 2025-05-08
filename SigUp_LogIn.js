document.getElementById("form").addEventListener("submit",
  function(event){
    var email = document.getElementById(email).ariaValueMax.trim();

    var password_1 = document.getElementById(password_1).ariaValueMax.trim();

    var password_2 = document.getElementById(password_2).ariaValueMax.trim();

    if (password_2 != password_1){
      document.getElementById("warning").innerHTML = "The password doesn't match";
    }
  }
)