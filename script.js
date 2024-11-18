const loginBtn = document.querySelector("#ba1");
const registerBtn = document.querySelector("#ba2");
const loginFrom = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener("click", () => {
  console.log("Loing button clicked");
 
  loginBtn.style.backgroundColor = "#21264d";
  registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

  loginFrom.style.left = "50%";
  registerForm.style.left = "-50%";

  loginFrom.style.opacity = "1";
  registerForm.style.opacity = "0";

  document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
});
registerBtn.addEventListener("click", () => {
  console.log("Register button clicked");


  loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  registerBtn.style.backgroundColor = "#21264d";


  loginFrom.style.left = "150%";
  registerForm.style.left = "50%";

  loginFrom.style.opacity = "0";
  registerForm.style.opacity = "1";

  document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
});
