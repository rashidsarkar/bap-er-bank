const depositBtn = document.getElementById("btn-deposit");
const depositInputFild = document.getElementById("deposit-input-fild");
const depositAmout = document.getElementById("deposit-amount");
const myAmount = document.getElementById("my-amount");

const withdrawBtn = document.getElementById("btn-withdraw");
const withdrawInputFild = document.getElementById("withdraw-input-fild");
const withdrawAmout = document.getElementById("withdraw-amount");

let depositAmoutDisplay = 0;
let myTotal = 1200;

// stap 1 add to the deposit btn
depositBtn.addEventListener("click", function () {
  // stap 2
  const newDepositFildString = depositInputFild.value;
  const newDepositAmount = parseFloat(newDepositFildString);
  //steap 3 get depost total
  const prevesFepositTotalString = depositAmout.innerText;
  const preveDepositTotal = parseFloat(prevesFepositTotalString);
  // stap 4 add number

  const currentDepositTotal = preveDepositTotal + newDepositAmount;
  //set deposit total
  depositAmout.innerText = currentDepositTotal;
  //step 5 ballace total
  const prebeusBalanceTotalString = myAmount.innerText;
  const preveBalanTotal = parseFloat(prebeusBalanceTotalString);
  // steap 6 calcutate curent total
  const currtentBallanceTotal = preveBalanTotal + newDepositAmount;
  // set balnce total
  myAmount.innerText = currtentBallanceTotal;

  //steap 7
  depositInputFild.value = "";
});
