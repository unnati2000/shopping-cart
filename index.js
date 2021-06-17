var username = document.querySelector(".username");
var password = document.querySelector(".password");
var login = document.querySelector(".login").addEventListener("click", () => {
  console.log(username.value, password.value);
  localStorage.setItem("username", username.value);
  localStorage.setItem("password", password.value);
  window.location.replace("/");
});
