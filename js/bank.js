// deposit work
const depositBtn = document.getElementById("btn-deposit");
const depositInputFild = document.getElementById("deposit-input-fild");
const depositAmout = document.getElementById("deposit-amount");
const myAmount = document.getElementById("my-amount");

// withdraw work
const withdrawBtn = document.getElementById("btn-withdraw");
const withdrawInputFild = document.getElementById("withdraw-input-fild");
const withdrawAmout = document.getElementById("withdraw-amount");

let depositAmoutDisplay = 0;
let myTotal = 1200;
myAmount.innerText = myTotal;
let withdrawAmoutDisplay = 0;

depositBtn.addEventListener("click", function () {
  let depositValue = depositInputFild.value;
  let depositValueNumber = Number(depositValue);

  if (depositValue > 0) {
    depositAmoutDisplay += depositValueNumber;
    depositAmout.innerText = depositAmoutDisplay;
    depositInputFild.value = "";
    myTotal += depositValueNumber;
    myAmount.innerText = myTotal;
  } else {
    alert("Plaese Provide valid Amount");
  }
});

withdrawBtn.addEventListener("click", function () {
  let withdrawValue = withdrawInputFild.value;

  let withdrawValueNumber = Number(withdrawValue);

  if (withdrawValue > 0 && withdrawValue < myTotal) {
    withdrawAmoutDisplay += withdrawValueNumber;
    withdrawAmout.innerText = withdrawAmoutDisplay;
    withdrawInputFild.value = "";
    myTotal -= withdrawValueNumber;
    myAmount.innerText = myTotal;
  } else if (withdrawValue > myTotal) {
    alert("you dont have that money");
  } else {
    alert("Plaese Provide a valid amount");
  }
});
