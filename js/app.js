const btnSubmit = document.getElementById("btn-submit");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");

btnSubmit.addEventListener("click", function () {
  const email = userEmail.value;

  const pass = userPass.value;

  if (email === "r@.c" && pass === "kaka") {
    console.log("valid user");
    location.href = "bank.html";
  } else {
    alert("invalid User ");
  }
});
