// console.log("home file connected");
const requirePin = 1234;

// add money:
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    //Step 1: get the written value in input form
    const bank = document.getElementById("bank-name").value;
    const accountNumber = document.getElementById("account-number").value;
    const addMoneyValue = parseInt(document.getElementById("add-money").value);
    const pinNumberValue = parseInt(document.getElementById("add-pin").value);

    //Step 2: get the available balance from the span tag
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    //Step 3: Check the condition:
    if (accountNumber.length < 11) {
      alert("Please give valid account number");
      return;
    }
    if (requirePin !== pinNumberValue) {
      alert("Please give valid pin number");
      return;
    }

    // Step 4: calculate & update the available balance;
    const currentTotalBalance = availableBalance + addMoneyValue;

    document.getElementById("available-balance").innerText =
      currentTotalBalance;
  });

// withdraw Money:
document.getElementById("btn-withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  //Step 2: get the available balance from the span tag
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const pinNumber = parseInt(document.getElementById("pin").value);

  //check the condition:
  if (agentNumber.length < 11) {
    alert("Please give valid number");
    return;
  }
  if (requirePin !== pinNumber) {
    alert("please give correct 4 digit pin");
    return;
  }
  if (availableBalance < withdrawAmount) {
    alert("Insufficient Money. Please add money.");
    return;
  }

  //calculate & update the available balance;
  const currentTotalBalance = availableBalance - withdrawAmount;
  document.getElementById("available-balance").innerText = currentTotalBalance;
});

//toggling :

document
  .getElementById("add-money-card-btn")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
  });
document
  .getElementById("cashout-money-card-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "block";
  });
