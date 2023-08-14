const depositBtn = document.getElementById("btn-deposit");
const depositInputFild = document.getElementById("deposit-input-fild");
const depositAmout = document.getElementById("deposit-amount");
const myAmount = document.getElementById("my-amount");
// const depositAmout = document.getElementById("deposit-amoun");
let depositAmoutDisplay = 0;
let myTotal = 1200;

depositBtn.addEventListener("click", function () {
  let depositValue = depositInputFild.value;
  myAmount.innerText = myTotal;

  let depositValueNumber = Number(depositValue);
  depositAmout.innerText = 0;

  if (depositValue > 0) {
    depositAmoutDisplay = depositAmoutDisplay + depositValueNumber;
    depositAmout.innerText = depositAmoutDisplay;
    depositInputFild.value = "";
    myTotal = myTotal + depositAmoutDisplay;
  } else {
    alert("Plaese Provide valid Amount");
  }
});
